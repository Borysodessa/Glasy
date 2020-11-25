/*=========modal=========*/

const feedbackButton = document.querySelector(".feedback__button");
const modalForm = document.querySelector(".modal__form");
const closeModal = modalForm.querySelector(".modal-close");


feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault(evt);
  modalForm.classList.remove('visually-hidden');
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.add('visually-hidden');
});

/*============ slider==========*/



$('.slider__list').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
