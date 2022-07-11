// Pseudo Code!
// Creating a pop up nav
// Target the nav save it in a variable
// addEventListener() on the nav and set the left position to 0

// Step 1 - Getting the hamburger menu icon and the actual slide out nav and storing them in a variable
const hamburgerMenuImg = document.querySelector('img');
const slideOutNav = document.getElementsByClassName('slideOutNav');

// Step 2 - Adding a listen event to the hamburgermenu img and using a click
hamburgerMenuImg.addEventListener('click', function () {
    // Step 3 - Toggling a class of hamburgermenu so it can change the left value to 0 and back to -506 so it comes on and off the screen
    slideOutNav[0].classList.toggle('hamburgerMenu')
    console.log(slideOutNav[0]);
});