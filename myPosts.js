'use strict';

const storedUsers = JSON.parse(localStorage.getItem('users'));
const index = storedUsers.findIndex(user => user.email == sessionStorage.getItem('email'))
const blogs = storedUsers[index].blogs
const container = document.getElementById('contain')
const postsTitle = document.getElementById('postsTitle')

const message1 = ' here are your blog posts!'
const message2 = ' your experiences are below!'

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

    postsTitle.innerText = `${this.name}, ${message}`
}

const bound = showTitle.bind(storedUsers[index])
bound(message1, message2)

const formatBlog = (...blogs) => {
  let blogIndex = 0
  
  blogs.forEach(blog => {
    const { image, title, desc } = blog
    const descPrevArr = desc.split(' ').slice(0, 3)
    let descPreviewString = ''

    for (let j = 0; j < descPrevArr.length; j++)
    {
        descPreviewString += descPrevArr[j] + ' '
    }

    container.innerHTML += `
    <div class="card mb-4">
      <a href="post.html?index=${blogIndex}">
        <img src="${image}" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${descPreviewString}...</p>
        <p class="card-text"><small class="text-muted">By ${storedUsers[index].name}</small></p>
      </div>
    </div>`

    blogIndex++
  })
}

formatBlog(...blogs)
