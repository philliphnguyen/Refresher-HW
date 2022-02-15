'use strict';

const email = sessionStorage.getItem('email')

if(!email && typeof email == 'object')
{
    document.getElementById('logOut').style.display = 'none'
    document.getElementById('logIn').style.display = 'inline'
    document.getElementById('post').style.display = 'none'
    document.getElementById('myPosts').style.display = 'none'
}
else
{
    document.getElementById('logOut').style.display = 'inline'
    document.getElementById('logIn').style.display = 'none'
    document.getElementById('post').style.display = 'inline'
    document.getElementById('myPosts').style.display = 'inline'
}

document.getElementById('logOut').onclick = () => {
    sessionStorage.clear()
    window.location.href = 'index.html'
}