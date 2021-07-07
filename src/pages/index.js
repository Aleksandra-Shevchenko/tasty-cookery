import './index.css';

import '../slider/chief-slider.js';
import { ChiefSlider } from "../slider/chief-slider.js";


// document.addEventListener('DOMContentLoaded', function () {
//   new ChiefSlider('.slider', {
//     loop: true,
//     autoplay: true,
//     interval: 5000,
//     refresh: true,
//   });
// });


const slidersEl = document.querySelectorAll('.slider');
for (let i = 0, len = slidersEl.length; i < len; i++) {
  // инициализация каждого элемента в качестве слайдера
  new ChiefSlider(slidersEl[i], {
    loop: false,
    // autoplay: true,
    interval: 5000,
    refresh: true,
  });
};

// const slider = new ChiefSlider('.slider', {
//   loop: false,
//   // autoplay: true,
//   interval: 5000,
//   refresh: true,
// });

// console.log(slider);
