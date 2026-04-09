// script.js
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  const formMessage = document.getElementById('formMessage');
  const submitBtn = document.querySelector('.form-submit');

  // Basic validation
  if (name === '' || email === '' || message === '') {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.style.color = '#ff6b6b';
    return;
  } 
  
  if (!validateEmail(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = '#ff6b6b';
    return;
  }
  
  const originalBtnText = submitBtn.innerText;
  submitBtn.innerText = 'Sending...';
  submitBtn.style.opacity = '0.8';
  formMessage.textContent = '';
  
  // Submit the form using FormSubmit via AJAX
  fetch("https://formsubmit.co/ajax/abdulrahm.hussien@osool-it.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: "New contact form submission from " + name
    })
  })
  .then(response => response.json())
  .then(data => {
      formMessage.textContent = 'Message sent successfully!';
      formMessage.style.color = '#00c853';
      document.getElementById('contactForm').reset(); // Clear the form
  })
  .catch(error => {
      console.log(error);
      formMessage.textContent = 'Oops! Something went wrong.';
      formMessage.style.color = '#ff6b6b';
  })
  .finally(() => {
      submitBtn.innerText = originalBtnText;
      submitBtn.style.opacity = '1';
  });
});

// Function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}