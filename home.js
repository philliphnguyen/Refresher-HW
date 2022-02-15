const heroText = document.getElementById('heroText')
const storedUsers = JSON.parse(localStorage.getItem('users'));

function showGreeting(message1, message2)
{
    const randomNumber = Math.random()
    let message;

    if (randomNumber < 0.5)
        message = message1
    else
        message = message2

    heroText.innerText = `${this.name}, ${message}`
}

if (sessionStorage.getItem('email') != undefined)
{        
    const messages =  [
        'went somewhere nice? Tell us your experience!',
        'ate something delicious? Describe it to us!'
    ]

    const index = storedUsers.findIndex(user => user.email == sessionStorage.getItem('email'))

    showGreeting.apply(storedUsers[index], messages)
}
