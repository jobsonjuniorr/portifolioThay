
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slides video");
    const descriptionElement = document.getElementById("video-description");

    const descriptions = [
        "Projeto 1: Desenvolvimento de um sistema web para gestão de pedidos.",
        "Projeto 2: Simulação de uma linha de produção no CoppeliaSim.",
        "Projeto 3: Aplicação JavaFX para gerenciamento de equipamentos escolares."
    ];

    function mudarSlide(direcao) {
        slides[index].pause(); 
        slides[index].classList.remove("active");

        index = (index + direcao + slides.length) % slides.length;

        slides[index].classList.add("active");
        slides[index].play(); 


        descriptionElement.textContent = descriptions[index];
    }
    slides.forEach(video => video.classList.remove("active"));
    slides[index].classList.add("active");
    slides[index].play();
    descriptionElement.textContent = descriptions[index]; 
    document.querySelector(".prev").addEventListener("click", () => mudarSlide(-1));
    document.querySelector(".next").addEventListener("click", () => mudarSlide(1));
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




document.addEventListener("DOMContentLoaded",function(){
    function animarFeedback(){
        let elemento = document.getElementById("feedback")
        let posicao = elemento.getBoundingClientRect().top
        let alturaTela = window.innerHeight

        if(posicao < alturaTela * 0.75){
            elemento.classList.add("show")
        }
    }
    window.addEventListener("scroll",animarFeedback)
})


document.addEventListener("DOMContentLoaded",function(){
    function animarContatc(){
        let elemento = document.getElementById("contact")
        let posicao = elemento.getBoundingClientRect().top
        let alturaTela = window.innerHeight

        if(posicao < alturaTela * 0.75){
            elemento.classList.add("show")
        }
    }
    window.addEventListener("scroll",animarContatc)
})

