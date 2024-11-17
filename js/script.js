const closeButton = document.querySelector('#closeButtonModalResponsive');
const closeModal = document.querySelector('#closeModal');
const fixed = document.querySelector('.fixed');
const openModal = document.querySelector('#openModalButton');
const redirect = document.querySelector('#redirect');

redirect.style.position = 'relative';
redirect.style.zIndex = '9999'
redirect.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent other clicks from interfering
    window.location.href = 'https://www.linkedin.com/in/enis-abazi-9a7097241/';
});
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