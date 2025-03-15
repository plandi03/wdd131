document.addEventListener("DOMContentLoaded", () => {
    // Display current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    // Hamburger menu functionality
    const nav = document.querySelector('nav ul');
    const hamburger = document.createElement('button');
    hamburger.innerHTML = '&#9776;';
    hamburger.classList.add('hamburger');
    document.querySelector('header').appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        hamburger.innerHTML = nav.classList.contains('show') ? 'X' : '&#9776;';
    });
});