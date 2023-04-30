window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  nav = document.getElementById("nav")
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.style.padding = "8px 0";
    nav.classList.add("small-nav");
    nav.classList.remove("large-nav");
  } else {
    nav.style.padding = "14px 0";
    nav.classList.add("large-nav");
    nav.classList.remove("small-nav");
  }
}