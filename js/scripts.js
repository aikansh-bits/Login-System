document.addEventListener('DOMContentLoaded', function () {
    // Grabbing the form element
    const form = document.querySelector('form');
    
    // Adding an event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form from refreshing the page
        
        // Grabbing the input values
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;
        
        // Basic email and password validation
        if (validateEmail(email) && validatePassword(password)) {
            // If valid, redirect to home page
            window.location.href = "home.html"; // Redirect to home screen
        } else {
            // Show an alert if email or password is invalid
            alert('Invalid email or password. Please try again.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);  // Returns true if email is valid
    }

    // Password validation function (for this case, we just check if it's non-empty)
    function validatePassword(password) {
        return password.length > 0;  // Returns true if password is non-empty
    }
});
