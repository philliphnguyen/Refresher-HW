'use strict';

document.getElementById('submitButton').onclick = () => {
    const name = document.getElementById('nameInput').value
    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value

    if (!User.checkValidation(email, password))
    {
        alert('Invalid email/password')
        console.log('Invalid email/password')
    }
    else
    {
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        const user = new User(name, email, password)
        
        if (storedUsers == null)
        {          
            const usersArr = [];
            usersArr[0] = user
            
            localStorage.setItem('users', JSON.stringify(usersArr))
        }
        else
        {          
            if (storedUsers.find(user => user.email == email) != undefined)
            {
                alert('Account already exists with that email')
            }
            else
            {
                storedUsers.push(user)

                localStorage.setItem('users', JSON.stringify(storedUsers))
            }
        }
        
        sessionStorage.setItem('email', email)

        window.location.href = 'index.html'   
    }
    
}