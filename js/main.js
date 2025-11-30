const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(`a[href="#${entry.target.id}"]`)
              .classList.add("active");
    }
  });
}, {
  threshold: 0.5      // 50% من السكشن لازم يكون ظاهر
});

sections.forEach(sec => observer.observe(sec));
