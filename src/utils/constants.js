
// объект параметров для валидации форм
const validationObject = {
  formSelector: '.footer__form',
  inputSelector: '.footer__input',
  submitButtonSelector: '.footer__btn',
  inactiveButtonClass: 'footer__btn_inactive',
  inputErrorClass: 'footer__input-error',
  errorClass: 'footer__input-error_active',
};

// селекторы для создания экземпляров классов
const selectorObj = {
  form: '.footer',
};

// все ссылки страницы
const anchors = document.querySelectorAll('a[href*="#"]');

export {
  validationObject,
  selectorObj,
  anchors
};
