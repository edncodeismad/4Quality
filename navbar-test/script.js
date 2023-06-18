

toggle = document.getElementById('nav-toggle');
responsiveNavLinks = document.getElementById('responsive-nav-links');

var navIsHidden = true;

toggleNav = () => {
    if (navIsHidden) {
        responsiveNavLinks.style.marginLeft = 0;
        toggle.innerHTML = "<img src=\"xmark.svg\">";
    } else {
        responsiveNavLinks.style.marginLeft = "100vw";
        toggle.innerHTML = "<img src=\"bars.svg\">";
    }

    navIsHidden = !navIsHidden;
}


toggle.addEventListener("click", toggleNav);
