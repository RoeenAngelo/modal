let openBtn = document.querySelector('#open-btn');
let modalContainer = document.querySelector('#modal-container');
let closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})