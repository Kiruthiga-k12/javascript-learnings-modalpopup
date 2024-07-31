const triggerPopupButton = document.getElementById('trigger-popup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');

triggerPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
