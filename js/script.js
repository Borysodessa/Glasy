
const feedbackButton = document.querySelector(".feedback__button");
const modalForm = document.querySelector(".modal__form");
const closeModal = modalForm.querySelector(".modal-close");
const sliderControl = document.querySelector(".slider-control__list:first-child");
console.log(sliderControl);

feedbackButton.addEventListener("click",function(evt){
  evt.preventDefault(evt);
  modalForm.classList.remove('visually-hidden');
});

closeModal.addEventListener("click",function(evt){
  evt.preventDefault();
  modalForm.classList.add('visually-hidden');
});




