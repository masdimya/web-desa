// Fixed Navbar Scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// Back to Top
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

(function () {
  ("use strict");

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let galeriContainer = select(".galeri-foto-container");
    if (galeriContainer) {
      let galeriIsotope = new Isotope(galeriContainer, {
        itemSelector: ".galeri-item",
        layoutMode: "fitRows",
      });

      let galeriFilters = select("#galeri-foto-filters li", true);

      on(
        "click",
        "#galeri-foto-filters li",
        function (e) {
          e.preventDefault();
          galeriFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          galeriIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          aos_init();
        },
        true
      );
    }
  });

  /**
   * Scrolls to an element with header offset
   */
  // const scrollto = (el) => {
  //   let header = select("#header");
  //   let offset = header.offsetHeight;

  //   if (!header.classList.contains("header-scrolled")) {
  //     offset -= 10;
  //   }

  //   let elementPos = select(el).offsetTop;
  //   window.scrollTo({
  //     top: elementPos - offset,
  //     behavior: "smooth",
  //   });
  // };

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  // on(
  //   "click",
  //   ".scrollto",
  //   function (e) {
  //     if (select(this.hash)) {
  //       e.preventDefault();

  //       let navbar = select("#navbar");
  //       if (navbar.classList.contains("navbar-mobile")) {
  //         navbar.classList.remove("navbar-mobile");
  //         let navbarToggle = select(".mobile-nav-toggle");
  //         navbarToggle.classList.toggle("bi-list");
  //         navbarToggle.classList.toggle("bi-x");
  //       }
  //       scrollto(this.hash);
  //     }
  //   },
  //   true
  // );

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });
})();;
