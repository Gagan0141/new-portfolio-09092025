document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate form fields
    if (name && email && message) {
        alert("Thank you for your message, " + name + "! I'll get back to you soon.");
    } else {
        alert("Please fill out all fields.");
    }

    // Optionally clear the form after submission
    document.getElementById("contact-form").reset();
});
