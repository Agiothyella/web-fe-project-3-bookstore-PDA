`use strict`;

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
}).mount();

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
