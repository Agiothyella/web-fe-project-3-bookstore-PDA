`use strict`;

const promotionsSplide = new Splide(".promotions__splide", {
  type: "fade",
  rewind: true,
  cover: true,
  perPage: 1,
  gap: 0,
  padding: 0,
  width: "100vw",
  height: "43rem",
  autoplay: true,
  interval: 10000,
  pauseOnHover: false,
  pauseOnFocus: false,
}).mount();
