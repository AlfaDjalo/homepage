// script.js
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;

    // Log to console
    // Need to add functionality to send a notification email to the Admin
    console.log(`Email sent to admin@cap.com from ${email} with the message: "${question}"`);

    // Alert the user
    alert('Thank you for your question! We will respond within a week.');

    // Reset the form
    document.getElementById('contactForm').reset();
});
