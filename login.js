
// Get the login tab button
var loginTabButton = document.getElementById("login-tab-button");
// Get the signup tab button
var signupTabButton = document.getElementById("signup-tab-button");
// Get the login form
var loginForm = document.getElementById("login-form");
// Get the signup form
var signupForm = document.getElementById("signup-form");

// Add a click event listener to the login tab button
loginTabButton.addEventListener("click", function () {
    // Hide the signup form
    signupForm.style.display = "none";
    // Show the login form
    loginForm.style.display = "block";
});

// Add a click event listener to the signup tab button
signupTabButton.addEventListener("click", function () {
    // Hide the login form
    loginForm.style.display = "none";
    // Show the signup form
    signupForm.style.display = "block";
});


const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach(button => {
    button.addEventListener("click", e => {
        tabButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});