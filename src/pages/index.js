import './index.css';
import { ChiefSlider } from "../slider/chief-slider.js";
import FormValidator from "../components/FormValidator.js";


// создаем экземпляры слайдеров
document.addEventListener('DOMContentLoaded', function() {
  var slidersEl = document.querySelectorAll('.slider');
  for (var i = 0, len = slidersEl.length; i < len; i++) {
    // инициализация каждого элемента в качестве слайдера
    new ChiefSlider(slidersEl[i], {
      loop: false,
      autoplay: true,
      interval: 5000,
      refresh: true,
    });
  };
});


//объект параметров для валидации форм
const validationObject = {
  formSelector: '.footer__form',
  inputSelector: '.footer__input',
  submitButtonSelector: '.footer__btn',
  inactiveButtonClass: 'footer__btn_inactive',
  inputErrorClass: 'footer__input-error',
  errorClass: 'footer__input-error_active',
};

//селекторы для создания экземпляров классов
const selectorObj = {
  form: '.footer',
};


//создаем экземпляры класса FormValidator и включаем валидацию форм
const validForm = new FormValidator(validationObject, selectorObj.form);
validForm.enableValidation();
