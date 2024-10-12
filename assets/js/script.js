// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".fixed-nav");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.7 }
);

sections.forEach((section) => {
  observer.observe(section);
});

let isScrolling;

window.addEventListener("scroll", function () {
  clearTimeout(isScrolling);

  isScrolling = setTimeout(function () {
    const profileImg = document.querySelector(".profile-img");
    const navBar = document.querySelector(".side-nav");
    const homeSection = document.querySelector("#home");

    if (profileImg && homeSection && navBar) {
      if (window.scrollY > homeSection.offsetHeight - navBar.offsetHeight) {
        profileImg.classList.add("move-to-nav");
      } else {
        profileImg.classList.remove("move-to-nav");
      }
    }
  }, 100); // Adjust the delay as necessary
});
