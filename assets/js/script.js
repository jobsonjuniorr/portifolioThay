const workingBox = document.querySelector(".working-box");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 820;


function updateScrollAmount(){
    if(window.innerWidth <= 768){
        scrollAmount = 420
    }else{
        scrollAmount = 820
    }
    workingBox.scrollTo({ left: 0, behavior: "smooth" });
}
updateScrollAmount()
window.addEventListener("resize", updateScrollAmount);

nextBtn.addEventListener("click", () => {
    workingBox.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    workingBox.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});



const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.muted = true;
});

function checkAndPlayVideos() {
    videos.forEach((video) => {
        const rect = video.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible && video.paused) {
            video.play().catch(error => console.log("Erro ao tentar reproduzir:", error));
        } else if (!isVisible) {
            video.pause();
        }
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.play().catch(error => console.log("Erro ao tentar reproduzir:", error));
        } else {
            entry.target.pause();
        }
    });
}, { threshold: 0.5 });

videos.forEach((video) => observer.observe(video));

document.addEventListener("click", () => {
    videos.forEach(video => {
        if (video.paused) {
            video.play().catch(error => console.log("Erro ao tentar reproduzir:", error));
        }
    });
}, { once: true });


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