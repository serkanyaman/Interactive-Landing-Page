const Header = document.getElementById("header");
const headerToggler = document.getElementById("header-toggler");
const bicycle = document.querySelector(".hero-bicycle");
const bicycleToggler = document.querySelector(".hero-action");

headerToggler.addEventListener("click", () => {
  if (Header.classList.contains("mb-hidden")) {
    Header.classList.remove("mb-hidden");
    Header.classList.add("mb-visible");
  } else {
    Header.classList.remove("mb-visible");
    Header.classList.add("mb-hidden");
  }
});

bicycleToggler.addEventListener("click", () => {
  bicycle.classList.add("oprm-anm");
  setTimeout(() => {
    bicycle.classList.remove("oprm-anm");
    bicycle.classList.add("oprm");
    setTimeout(() => {
      bicycle.classList.remove("oprm");
      bicycle.classList.add("animatee");
      setTimeout(() => {
        bicycle.classList.remove("animatee");
      }, 14500);
    }, 10);
  }, 999);
});
