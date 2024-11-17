const closeButton = document.querySelector('#closeButtonModalResponsive');
const closeModal = document.querySelector('#closeModal');
const fixed = document.querySelector('.fixed');
const openModal = document.querySelector('#openModalButton');

closeModal.style.display = 'none';
fixed.style.position = 'inherit !important';
    fixed.style.zIndex = '-1';
closeButton.addEventListener('click' , function() { 
    closeModal.style.display = 'none';
    fixed.style.position = 'inherit !important';
    fixed.style.zIndex = '-1';
})
openModal.addEventListener('click' , function() { 
    closeModal.style.display = 'block';
    // fixed.style.position = 'fixed !important';
    // fixed.style.zIndex = '50';
})