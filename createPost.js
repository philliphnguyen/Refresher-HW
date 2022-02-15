'use strict';

import { ACCESS_ID } from "./apiConfig.js";

const category = document.getElementById('categoryInput')
const locationInput = document.getElementById('locationInput')
const foodInput = document.getElementById('foodInput')
const locationButton = document.getElementById('locationButton')
const titleInput = document.getElementById('titleInput')
const descInput = document.getElementById('descInput')
const tagsInput = document.getElementById('tagsInput')
const imageButton = document.getElementById('imageButton')
const bannerImage = document.getElementById('bannerImage')
const createTitle = document.getElementById('createTitle')
let latitude
let longitude
let imageURL

locationInput.style.display = 'none'
foodInput.style.display = 'none'
locationButton.style.display = 'none'

function showTitle(message1, message2)
{
    const randomNumber = Math.random()
    let message;

    if (randomNumber < 0.5)
    {
        message = message1
    }
    else
    {
        message = message2
    }

    createTitle.innerText = `${this.name}, ${message}`
}

const message1 = 'share your experience here!'
const message2 = 'we cannot wait to read your post!'

const storedUsers = JSON.parse(localStorage.getItem('users'));
const index = storedUsers.findIndex(user => user.email == sessionStorage.getItem('email'))

showTitle.call(storedUsers[index], message1, message2)

category.onchange = () => {
    const catValue = category.value;

    if (catValue == 'Travel')
    {
        locationInput.style.display = 'inline'
        foodInput.style.display = 'none'
        locationButton.style.display = 'inline'
    }
    else if (catValue == 'Food/Drink')
    {
        locationInput.style.display = 'none'
        foodInput.style.display = 'inline'
        locationButton.style.display = 'none'
    }
}

locationButton.onclick = () => {
    if (navigator.geolocation)
    {      
        const promise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(pos => {
                latitude = pos.coords.latitude
                longitude = pos.coords.longitude  
                resolve()
            })
        })

        promise.then(() => {
            alert('Location saved')
            console.log(latitude + " " + longitude)
        })
    }
}

postButton.onclick = () => {
    const blog = new Blog(titleInput.value, descInput.value, category.value, tagsInput.value.split(' '))
    blog.tags = [...blog.tags, category.value]
    
    if (category.value == 'Travel')
    {
        const travelBlog = Object.assign(blog, {
            locationName: locationInput.value,
            latitude: latitude,
            longitude: longitude,
            print: function () {
                console.log('Title: ' + this.title + ' Desc: ' + this.desc + 
                ' Category: ' + this.category + ' Tags: ' + this.tags + 
                ' Location name: ' + this.locationName + ' Latitude: ' + this.latitude + 
                ' Longitude: ' + this.longitude)
            }
        })

        if (imageURL != undefined) travelBlog.image = imageURL;

        User.addBlog(travelBlog)

        window.location.href = 'myPosts.html'
    }
    else if (category.value == 'Food/Drink')
    {
        const foodBlog = Object.assign(blog, {
            foodName: foodInput.value,
            print: function () {
                console.log('Title: ' + this.title + ' Desc: ' + this.desc + 
                ' Category: ' + this.category + ' Tags: ' + this.tags + 
                ' Food/Drink name: ' + this.foodName)
            }
        })

        if (imageURL != undefined) foodBlog.image = imageURL;

        User.addBlog(foodBlog)

        window.location.href = 'myPosts.html'
    }
    else
    {
        alert('Choose a category')
    }
}

imageButton.addEventListener('click', async () => {
    if (category.value == 'Travel' && locationInput.value != '' ||
        category.value == 'Food/Drink' && foodInput.value != '')
    {
        let searchQuery;

        if (category.value == 'Travel') searchQuery = locationInput.value
        else if (category.value == 'Food/Drink') searchQuery = foodInput.value
        
        imageURL = await getImage(searchQuery);

        bannerImage.style.backgroundImage = `url(${imageURL})`
        bannerImage.style.display = "block"
    }
    else
    {
        alert('Please enter a value above')
    }
})

async function getImage(searchQuery) {
    return fetch(`https://api.unsplash.com/photos/random/?client_id=${ACCESS_ID}&query=${searchQuery}&orientation=landscape`)
    .then(res => res.json())
    .then(image => {
        return image.urls.regular
    })
}
