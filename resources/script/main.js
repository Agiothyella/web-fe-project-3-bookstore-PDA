`use strict`;

//----------------------- Splider js
const trendingSplide = new Splide(".trending__splide", {
  type: "loop",
  rewind: true,
  perPage: 3,
  perMove: 3,
  pagination: false,
  arrows: false,
  autoHeight: true,
  gap: "5rem",
  keyboard: "focused",
  autoplay: true,
  interval: 12000,
  speed: 4000,
  waitForTransition: false,
  pauseOnHover: true,
  pauseOnFocus: false,
  padding: {
    left: "2rem",
    right: "2rem",
  },

  breakpoints: {
    1000: {
      perPage: 2,
      perMove: 2,
    },
  },
}).mount();

const promotionsSplide = new Splide(".promotions__splide", {
  type: "fade",
  rewind: true,
  cover: true,
  height: "43rem",
  keyboard: "focused",
  autoplay: true,
  interval: 10000,
  pauseOnHover: true,
  pauseOnFocus: false,
}).mount();

const categorySplide = new Splide(".category__splide", {
  perPage: 9,
  perMove: 1,
  autoHeight: true,
  keyboard: "focused",
  pagination: false,

  breakpoints: {
    1360: {
      padding: {
        left: "2rem",
        right: "2rem",
      },
    },

    1200: {
      perPage: 7,
    },

    1000: {
      perPage: 7,
      padding: {
        left: "0rem",
        right: "0rem",
      },
    },

    850: {
      perPage: 6,
      padding: {
        left: "0rem",
        right: "0rem",
      },
    },

    700: {
      perPage: 5,
      padding: {
        left: "0rem",
        right: "0rem",
      },
    },
  },
}).mount();

const picksSplide = new Splide(".picks__splide", {
  type: "fade",
  rewind: true,
  perPage: 1,
  gap: 0,
  padding: 0,
  height: "43rem",
  keyboard: false,
  pagination: false,
  arrows: false,
  drag: false,
  autoplay: true,
  interval: 20000,
  pauseOnFocus: false,
});

const picksSplideNav = new Splide(".picks__splide-nav", {
  perPage: 2,
  rewind: true,
  isNavigation: true,
  direction: "ttb",
  height: "12rem",
  gap: "3rem",
  pagination: false,
  arrows: false,
  keyboard: false,
  drag: false,
  autoWidth: true,

  breakpoints: {
    1000: {
      height: "12rem",
    },
  },
}).mount();

picksSplide.sync(picksSplideNav).mount();

const newSplide = new Splide(".new__splide", {
  type: "fade",
  rewind: true,
  perPage: 1,
  perMove: 1,
  keyboard: "focused",
  height: "32rem",
  pagination: false,
  arrows: false,
  drag: false,
  cover: true,
  gap: "5rem",
  speed: 600,

  breakpoints: {
    850: {
      height: "36rem",
      gap: "0rem",
    },

    700: {
      height: "38rem",
      gap: "0rem",
    },
  },
});

const newSplideNav = new Splide(".new__splide-nav", {
  type: "loop",
  rewind: true,
  perPage: 9,
  isNavigation: true,
  focus: "center",
  perMove: 1,
  keyboard: "focused",
  gap: "2rem",
  pagination: false,
  width: "100%",
  drag: false,
  autoHeight: true,
  padding: {
    left: "2rem",
    right: "2rem",
  },

  breakpoints: {
    1200: {
      perPage: 7,
    },

    850: {
      perPage: 5,
    },
  },
}).mount();

newSplide.sync(newSplideNav).mount();

const topSplide = new Splide(".top__splide", {
  type: "loop",
  rewind: true,
  keyboard: "focused",
  perPage: 2,
  perMove: 2,
  pagination: false,
  drag: false,
  width: "100%",
  autoHeight: true,
  speed: 600,
  grid: {
    dimensions: [
      [1, 1],
      [2, 3],
      [1, 1],
      [2, 3],
    ],
    gap: {
      row: "1rem",
      col: "10rem",
    },
  },

  breakpoints: {
    1200: {
      grid: {
        gap: {
          row: "0rem",
          col: "4rem",
        },
      },
    },
    1000: {
      grid: {
        dimensions: [
          [1, 1],
          [2, 1],
          [2, 2],
          [1, 1],
          [2, 2],
          [2, 1],
        ],

        gap: {
          row: "3rem",
          col: "4rem",
        },
      },
    },

    850: {
      grid: {
        dimensions: [
          [1, 1],
          [2, 1],
          [2, 1],
          [2, 1],
          [1, 1],
          [2, 1],
          [2, 1],
          [2, 1],
        ],

        gap: {
          row: "2rem",
          col: "0rem",
        },
      },
    },
  },
}).mount(window.splide.Extensions);

const seriesSplide = new Splide(".series__splide", {
  type: "loop",
  rewind: true,
  perPage: 1,
  perMove: 1,
  keyboard: "focused",
  autoHeight: true,
  pagination: false,
  arrows: false,
  cover: true,
  gap: "5rem",
  speed: 600,
  padding: {
    right: "30rem",
    left: "30rem",
  },

  breakpoints: {
    1200: {
      padding: {
        right: "20rem",
        left: "20rem",
      },
    },

    1000: {
      padding: {
        right: "15rem",
        left: "15rem",
      },
    },

    850: {
      padding: {
        right: "10rem",
        left: "10rem",
      },
    },
  },
});

const seriesSplideText = new Splide(".series__splide-text", {
  type: "loop",
  rewind: true,
  perPage: 1,
  perMove: 1,
  autoHeight: true,
  keyboard: "focused",
  width: "80rem",
  gap: 0,
  padding: 0,
  pagination: false,
  speed: 600,
}).mount();

seriesSplide.sync(seriesSplideText).mount();

const comicSplide = new Splide(".comic__splide", {
  type: "loop",
  rewind: true,
  perPage: 6,
  perMove: 1,
  keyboard: "focused",
  gap: "3rem",
  pagination: false,
  width: "100%",
  autoHeight: true,
  padding: {
    left: "2rem",
    right: "2rem",
  },

  breakpoints: {
    1000: {
      perPage: 5,
    },

    850: {
      perPage: 4,
    },
  },
}).mount();
//--------------------------------------------------

//---------- Nav more hide on scroll
const nav = document.querySelector(".nav");
const navMore = document.querySelector(".nav__more");

function showNav() {
  let top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 1) {
    nav.classList.add("nav--scroll");
    navMore.classList.add("nav__more--scroll");
  } else {
    nav.classList.remove("nav--scroll");
    navMore.classList.remove("nav__more--scroll");
  }
}

window.onscroll = function () {
  showNav();
};
//----------------------------------------

//------------------------ Small Nav
const sideNav = document.querySelector(".nav__sidebar");
const sideNavBack = document.querySelector(".nav__sidebar__back");
const sideNavMenu = document.querySelector(".nav__sidebar__menu");
const sideNavClose = document.querySelector(".nav__sideclose");
const sideNavOpen = document.querySelector(".nav__side");
const sideNavLink = document.querySelectorAll(".nav__sidelink");

function addSideNavListener(functName) {
  functName.addEventListener("click", toggleSideNav);
}

function addSlideNavListeners(functName) {
  for (let i = 0; i < functName.length; i++) {
    functName[i].addEventListener("click", toggleSideNav);
  }
}

addSideNavListener(sideNavBack);
addSideNavListener(sideNavMenu);
addSideNavListener(sideNavClose);
addSideNavListener(sideNavOpen);
addSideNavListener(sideNav);
addSlideNavListeners(sideNavLink);

function toggleSideNav() {
  sideNav.classList.toggle("js-nav__show");
  sideNavBack.classList.toggle("u-visible");
}
//----------------------------------
