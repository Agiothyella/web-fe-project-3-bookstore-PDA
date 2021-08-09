`use strict`;

const promotionsSplide = new Splide(".promotions__splide", {
  type: "fade",
  rewind: true,
  cover: true,
  height: "43rem",
  autoplay: true,
  interval: 10000,
  pauseOnHover: false,
  pauseOnFocus: false,
}).mount();

const picksSplide = new Splide(".picks__splide", {
  type: "fade",
  perPage: 1,
  gap: 0,
  padding: 0,
  height: "43rem",
  pagination: false,
  arrows: false,
  drag: false,
});

const picksSplideNav = new Splide(".picks__splide-nav", {
  perPage: 2,
  isNavigation: true,
  pagination: false,
  arrows: false,
  direction: "ttb",
  height: "5rem",
  autoWidth: true,
}).mount();

picksSplide.sync(picksSplideNav).mount();

// const newSplide = new Splide(".new__splide", {
//   type: "loop",
//   rewind: true,
//   height: "60rem",
// }).mount();

const topSplide = new Splide(".top__splide", {
  type: "loop",
  rewind: true,
  perPage: 2,
  perMove: 2,
  pagination: false,
  width: "100%",
  autoHeight: true,
  grid: {
    dimensions: [
      [1, 1],
      [2, 3],
      [1, 1],
      [2, 3],
    ],
    gap: {
      row: "1rem",
      col: "5rem",
    },
  },
}).mount(window.splide.Extensions);

const seriesSplide = new Splide(".series__splide", {
  type: "loop",
  rewind: true,
  perPage: 1,
  perMove: 1,
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
  gap: "3rem",
  pagination: false,
  width: "100%",
  autoHeight: true,
  padding: {
    left: "2rem",
    right: "2rem",
  },
}).mount();
