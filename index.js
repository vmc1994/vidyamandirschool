document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple script for interactivity
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });
});