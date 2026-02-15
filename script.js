const themeBtn = document.querySelector(".theme-btn");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
});
