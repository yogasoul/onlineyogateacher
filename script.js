const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector(".booking-form");
const note = document.querySelector(".form-note");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  note.textContent = "Thanks. This mock form is ready to connect to booking.";
});
