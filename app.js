let openBtn = document.querySelector('#open-btn');
let modalContainer = document.querySelector('#modal-container');
let closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})

//close the modal by clicking anywhere on the window

// window.addEventListener('click', (e) => {
//     if ((e).target === modalContainer) {
//         modalContainer.style.display = 'none';
//     }
// })