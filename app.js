const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".slider");

let index = 0;

function showSlide(i) {
    // DOT ACTIVE
    dots.forEach(dot => dot.classList.remove("active"));
    dots[i].classList.add("active");

    slider.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
}

setInterval(nextSlide, 3000);

// DOT CLICK
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
    });
});

// topscroll-btn

const btn = document.getElementById("scrollTopBtn");

// scroll bo‘lsa button chiqadi
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// bosilganda tepaga chiqadi
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};