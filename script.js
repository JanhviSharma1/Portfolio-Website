// Select all the bubbles
const bubbles = document.querySelectorAll(".bubble, .bubble-big");

// Function to handle bubble click
bubbles.forEach((bubble) => {
  let clickCount = 0;

  bubble.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
      bubble.style.backgroundColor = "#CEC075";
      bubble.style.color = "black";
    } else if (clickCount === 2) {
      bubble.style.backgroundColor = "#B26E63";
      bubble.style.color = "white";
    } else {
      clickCount = 0;
      bubble.style.backgroundColor = "#654C4F";
    }
  });
});

// Initialize EmailJS with your user ID
emailjs.init("aR6fcXVOoHJzEy60q"); // Replace with your actual User ID from EmailJS

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Create an object with form data
    const formData = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send("service_ca4c7wg", "template_z8l7adx", formData)
      .then(function (response) {
        console.log("Success:", response);
        alert("Your message has been sent successfully!");
        // Reset the form
        document.getElementById("contact-form").reset();
      })
      .catch(function (error) {
        console.error("Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  });
