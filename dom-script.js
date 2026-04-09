document.addEventListener("DOMContentLoaded", function () {
  
  // Sticky Navbar background color toggle
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }

  // Scroll Reveal Animations
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // observer.unobserve(entry.target); // Un-comment if animation should only happen once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
  });

  // Contact Form Submission (Home Page)
  const contactForm = document.getElementById('contactHomeForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const message = contactForm.querySelector('#message').value.trim();
      
      const formMessage = document.getElementById('formMessageHome');
      const btn = contactForm.querySelector('button[type="submit"]');
      
      if (!name || !email || !message) {
          if (formMessage) formMessage.textContent = 'Please fill out all fields.';
          return;
      }
      
      const originalText = btn.innerText;
      btn.innerText = "Sending...";
      btn.style.opacity = '0.8';
      if (formMessage) formMessage.textContent = '';
      
      fetch('https://formsubmit.co/ajax/abdulrahm.hussien@osool-it.com', {
        method: 'POST',
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
          btn.innerText = "Message Sent!";
          btn.style.background = "#00c853";
          if (formMessage) {
              formMessage.textContent = 'Message sent successfully!';
              formMessage.style.color = '#00c853';
          }
          contactForm.reset();
          
          setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = ""; 
            btn.style.opacity = '1';
            if (formMessage) formMessage.textContent = '';
          }, 3000);
      })
      .catch(error => {
          console.log(error);
          if (formMessage) {
              formMessage.textContent = 'Oops! Something went wrong.';
              formMessage.style.color = '#ff6b6b';
          }
          btn.innerText = originalText;
          btn.style.opacity = '1';
      });
    });
  }

});