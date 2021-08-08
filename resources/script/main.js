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

const comicSplide = new Splide(".comic__splide", {
  type: "loop",
  rewind: true,
  perPage: 6,
  perMove: 1,
  gap: "3rem",
  pagination: false,
  width: "100%",
  height: "30rem",
  padding: {
    left: "2rem",
    right: "2rem",
  },
}).mount();
