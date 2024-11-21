document.addEventListener("DOMContentLoaded", function () {
  const targetElements = document.querySelectorAll('.slide-in-bottom');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-from-bottom'); // Add animation trigger class
          entry.target.classList.remove('slide-in-bottom');
        }, 500);
      }
    });
  });

  targetElements.forEach((element) => {
    observer.observe(element); // Observe each element
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const targetElements = document.querySelectorAll('.slide-in-left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-from-left'); // Add animation trigger class
          entry.target.classList.remove('slide-in-left');
        }, 500);
      }
    });
  });

  targetElements.forEach((element) => {
    observer.observe(element); // Observe each element
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const targetElements = document.querySelectorAll('.slide-in-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-from-right'); // Add animation trigger class
          entry.target.classList.remove('slide-in-right');
        }, 500);
      }
    });
  });

  targetElements.forEach((element) => {
    observer.observe(element); // Observe each element
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const targetElements = document.querySelectorAll('.slide-in-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-from-up'); // Add animation trigger class
          entry.target.classList.remove('slide-in-up');
        }, 500);
      }
    });
  });

  targetElements.forEach((element) => {
    observer.observe(element); // Observe each element
  });
});

//Mobile Toggle
function toggleMenu() {
  const menu = document.querySelector('.navbar-menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}