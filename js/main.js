let button = document.querySelector ('.button');

button.addEventListener('click', () => {
    document.querySelector ('nav').classList.toggle('show-nav');
});