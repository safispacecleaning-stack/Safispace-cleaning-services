document.addEventListener("DOMContentLoaded", function () {
  // WhatsApp number
  const whatsappNumber = "254743595411";

  // WhatsApp buttons
  const whatsappButtons = document.querySelectorAll(
    ".whatsapp-btn, .book-btn"
  );

  whatsappButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const message =
        "Hello, I would like to book your cleaning services in Ongata Rongai.";

      const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");
    });
  });

  // Mobile menu
  const menuButton = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Automatic copyright year
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
