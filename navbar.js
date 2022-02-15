'use strict';

class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-dark bg-dark px-3 navbar-expand-lg">
            <a class="navbar-brand" href="index.html">Blog</a>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item" id="logIn">
                    <a href="login.html" class="nav-link">Log in</a>
                </li>
                <li class="nav-item" id="logOut">
                    <a href="index.html" class="nav-link">Log out</a>
                </li>
                <li class="nav-item" id="post">
                    <a href="createPost.html" class="nav-link">Post</a>
                </li>
                <li class="nav-item" id="myPosts">
                    <a href="myPosts.html" class="nav-link">My Posts</a>
                </li>
            </ul>
        </nav>
        `
    }
}

customElements.define("app-navbar", Navbar);