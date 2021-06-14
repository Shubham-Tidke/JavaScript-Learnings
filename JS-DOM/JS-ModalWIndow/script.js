'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
}
const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click',openModal);
}
btnCloseModal.addEventListener('click',closeModal);//closes modal when click on cross over modal
overlay.addEventListener('click',closeModal); //closes modal when clicked outside of it

//closing modal when 'Esc' clicked
document.addEventListener('keydown',function(e){
  //parameter'e',JS calls the function when key press happens.
  //console.log(e); //prints keyboard event with values,eg. 'key'=key pressed on keyboard
  if(e.key === 'Escape' && !modal.classList.contains('hidden'))
  {
    closeModal();
  }
})
