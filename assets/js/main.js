(function () {
  "use strict";

  const header = document.querySelector("#header");

  function toggleScrolled() {

    if (!header) return;

    if (
      !header.classList.contains("fixed-top") &&
      !header.classList.contains("sticky-top") &&
      !header.classList.contains("scroll-up-sticky")
    ) {
      return;
    }

    document.body.classList.toggle("scrolled", window.scrollY > 100);

  }

  window.addEventListener("load", toggleScrolled);
  document.addEventListener("scroll", toggleScrolled);


  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navmenu ul");

  if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.classList.toggle("mobile-nav-active");

    });

    document.querySelectorAll(".navmenu a").forEach(link => {

      link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("mobile-nav-active");

      });

    });

    window.addEventListener("resize", () => {

      if (window.innerWidth >= 1200) {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("mobile-nav-active");

      }

    });

  }


  window.addEventListener("load", () => {

    document.querySelector("#preloader")?.remove();

  });


  const scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {

    if (!scrollTop) return;

    scrollTop.classList.toggle("active", window.scrollY > 100);

  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  scrollTop?.addEventListener("click", e => {

    e.preventDefault();

    window.scrollTo({

      top: 0,
      behavior: "smooth"

    });

  });


  window.addEventListener("load", () => {

    if (typeof AOS !== "undefined") {

      AOS.init({

        duration: 700,
        easing: "ease-in-out",
        once: true,
        mirror: false

      });

    }

  });


  let servicesSwiper = null;

  function initSwiper() {

    document.querySelectorAll(".init-swiper").forEach(swiperElement => {

      const config = JSON.parse(

        swiperElement
          .querySelector(".swiper-config")
          .textContent
          .trim()

      );

      const swiper = new Swiper(swiperElement, config);

      if (swiperElement.classList.contains("services-swiper")) {

        servicesSwiper = swiper;

      }

    });

  }

  window.addEventListener("load", initSwiper);
  

  window.addEventListener("load", () => {

    document
      .querySelectorAll(".footer-links a[data-slide]")
      .forEach(link => {

        link.addEventListener("click", function (e) {

          e.preventDefault();

          const services = document.querySelector("#services");

          if (services) {

            services.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

          if (!servicesSwiper) return;

          setTimeout(() => {

            servicesSwiper.slideToLoop(
              Number(this.dataset.slide),
              700
            );

          }, 450);

        });

      });

  });


  const navLinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {

    const position = window.scrollY + 180;

    navLinks.forEach(link => {

      if (!link.hash) return;

      const section = document.querySelector(link.hash);

      if (!section) return;

      if (

        position >= section.offsetTop &&
        position < section.offsetTop + section.offsetHeight

      ) {

        navLinks.forEach(item => {
          item.classList.remove("active");
        });

        link.classList.add("active");

      }

    });

  }

  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

})();