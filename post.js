'use strict';
import { GOOGLE_API } from "./apiConfig";

const urlParams = new URLSearchParams(window.location.search)
const blogIndex = urlParams.get('index')

const storedUsers = JSON.parse(localStorage.getItem('users'));
const userIndex = storedUsers.findIndex(user => user.email == sessionStorage.getItem('email'))
const blog = storedUsers[userIndex].blogs[blogIndex]

const bannerImage = document.getElementById('bannerImage')
bannerImage.style.backgroundImage = `url(${blog.image})`
bannerImage.style.display = "block"

const title = document.getElementById('title')
title.innerText = blog.title

const name = document.getElementById('name')
name.innerText = 'By ' + storedUsers[userIndex].name

const desc = document.getElementById('desc')
desc.innerText = blog.desc

const tags = document.getElementById('tags')
tags.innerText = 'Tags: '

for (var tag of blog.tags)
{
    tags.innerText += ' ' + tag
}

const category = tag

if (category == 'Travel')
{
    const mapImg = document.getElementById('mapImg')

    mapImg.src = `https://maps.googleapis.com/maps/api/staticmap?center=${blog.latitude},${blog.longitude}&zoom=14&size=400x400&key=${GOOGLE_API}`
}