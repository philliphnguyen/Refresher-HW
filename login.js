'use strict';

document.getElementById('submitButton').onclick = () => {
    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value

    const storedUsers = JSON.parse(localStorage.getItem('users'))

    if (storedUsers.find(user => user.email == email && user.password == password) == undefined)
    {
        alert('Invalid email/password')
    }
    else
    {
        sessionStorage.setItem('email', email)

        window.location.href = 'index.html'
    }
}