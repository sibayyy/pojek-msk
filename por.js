const target = document.getElementById('typewriter'); // Harus sama dengan ID di HTML
const phrases = ["web developer", "Network Engineer", "Menguasai linux"];
let pIdx = 0;
let cIdx = 0;
let deleting = false;

function typeEffect() {
    const current = phrases[pIdx];
    
    if (deleting) {
        target.innerText = current.substring(0, cIdx - 1);
        cIdx--;
    } else {
        target.innerText = current.substring(0, cIdx + 1);
        cIdx++;
    }

    let speed = deleting ? 100 : 200;

    if (!deleting && cIdx === current.length) {
        speed = 2000;
        deleting = true;
    } else if (deleting && cIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);  
}

document.addEventListener('DOMContentLoaded', typeEffect);