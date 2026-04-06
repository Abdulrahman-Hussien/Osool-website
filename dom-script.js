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

  // Contact Form Submission (Mock)
  const contactForm = document.getElementById('contactHomeForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      btn.innerText = "Sending...";
      btn.style.opacity = '0.8';
      
      setTimeout(() => {
        btn.innerText = "Message Sent!";
        btn.style.background = "#00c853";
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.background = ""; // revert to css variable
          btn.style.opacity = '1';
        }, 3000);
      }, 1500);
    });
  }

});