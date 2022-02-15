'use strict';

class User {
    constructor(name, email, password, blogs = []) {
        this.name = name
        this.email = email
        this.password = password
        this.blogs = blogs
    }

    printUser() {
        console.log(name + " " + email + " " + password)
    }

    static addBlog(blog) {
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        const index = storedUsers.findIndex(user => user.email == sessionStorage.getItem('email'))

        storedUsers[index].blogs.push(blog)

        localStorage.setItem('users', JSON.stringify(storedUsers))
    }

    static checkValidation(emailInput = '', passwordInput = '')
    {
        return emailInput.includes('@') && passwordInput.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/g)
    }
}

function Blog(title, desc, category, tags) {
    this.title = title
    this.desc = desc
    this.category = category
    this.tags = tags
}

Blog.prototype.print = function() {
    console.log('Title: ' + this.title + ' Desc: ' + this.desc + ' Category: ' + this.category
    + ' Tags: ' + this.tags)
}