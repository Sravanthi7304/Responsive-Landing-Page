window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

document.getElementById("menu-icon").onclick = () => {
  document.getElementById("nav-menu").classList.toggle("active");
};

document.getElementById("cta-btn").onclick = () => {
  alert("Welcome to Prodigy InfoTech Internship! 🚀");
};