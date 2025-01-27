// script.js
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (name === '' || email === '' || message === '') {
    document.getElementById('formMessage').textContent = 'Please fill out all fields.';
  } else if (!validateEmail(email)) {
    document.getElementById('formMessage').textContent = 'Please enter a valid email address.';
  } else {
    document.getElementById('formMessage').textContent = 'Message sent successfully!';
    document.getElementById('contactForm').reset(); // Clear the form
  }
});

// Function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}