const header = document.querySelector(".header");
const introH = document.querySelector(".intro").clientHeight;
let currentScroll = window.pageYOffset;

const addFixedHeader = (currentScroll) => {
  if (currentScroll > introH / 2 - 50) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  }
};

addFixedHeader(currentScroll);

window.addEventListener("scroll", () => {
  currentScroll = window.pageYOffset;
  addFixedHeader(currentScroll);
});
