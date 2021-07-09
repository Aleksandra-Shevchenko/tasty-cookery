import "./index.css";
import {
  validationObject,
  selectorObj,
  anchors,
} from "../utils/constants.js";

import { ChiefSlider } from "../components/slider.js";
import FormValidator from "../components/FormValidator.js";

// создаем экземпляры слайдеров
document.addEventListener("DOMContentLoaded", function() {
  const slidersEl = document.querySelectorAll(".slider");
  for (let i = 0, len = slidersEl.length; i < len; i++) {
    // инициализируем каждый элемент в качестве слайдера
    new ChiefSlider(slidersEl[i], {
      loop: false,
      autoplay: true,
      interval: 5000,
      refresh: true,
    });
  }
});

// создаем экземпляры класса FormValidator и включаем валидацию формы
const validForm = new FormValidator(validationObject, selectorObj.form);
validForm.enableValidation();

// реализуем плавный скролл до формы по нажатиям на ссылки
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href").substring(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  })
};
