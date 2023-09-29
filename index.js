
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const myScroll = ScrollReveal({
    distancia: '40px',
    duracion: 2500,
    reset:True 
});

myScroll.reveal('.logo',{delay:50, origin:'left'});
myScroll.reveal('.navbar',{delay:400, origin:'top'});