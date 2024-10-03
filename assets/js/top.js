let burger = document.getElementById('burger');
let overlay = document.getElementsByClassName('menu-items-sp')[0];
let closet = document.getElementsByClassName('burger-close')[0];

burger.addEventListener('click', function() {
        overlay.style.display = 'block';
        closet.style.display = 'block';
        this.style.display = 'none';
});

closet.addEventListener('click', function() {
        overlay.style.display = 'none';
        this.style.display = 'none';
        burger.style.display = 'block';

});

