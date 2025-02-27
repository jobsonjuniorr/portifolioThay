const workingBox = document.querySelector(".working-box");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 820;


function updateScrollAmount(){
    if(window.innerWidth <= 768){
        scrollAmount = 420
    }
}
updateScrollAmount()


nextBtn.addEventListener("click", () => {
    workingBox.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    workingBox.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
window.addEventListener("resize", updateScrollAmount);


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

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const header = document.querySelector("header");
    const hamburger = document.querySelector(".hamburger");
    const closeIcon = document.querySelector(".close");

    menuToggle.addEventListener("click", function() {
        if (!header.classList.contains("active")) {
            header.classList.add("active"); // Abre o menu
            setTimeout(() => {
                hamburger.style.display = "none";
                closeIcon.style.display = "inline";
            }, 500); // Espera 500ms (mesmo tempo do CSS)
        } else {
            header.classList.remove("active"); // Fecha o menu
            setTimeout(() => {
                closeIcon.style.display = "none";
                hamburger.style.display = "inline";
            }, 500); // Espera 500ms antes de mudar de volta
        }
    });
});
