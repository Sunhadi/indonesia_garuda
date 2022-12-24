'use strict';

/*untuk pengambilan sebuah document atau id dari setiap element yang ada difile html*/
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navElemArr = [navOpenBtn, navCloseBtn, overlay];

/*untuk mengatur navigation menjadi sidebar agar bisa responsive*/
const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

/* berfungsi untuk perpindahan halaman dengan mengambil dari sebuah function yang sudah dibuat dengan penamaan gotoPage */
function gotoPage() {
  /* digunakan untuk menambahkan sebuah alamat untuk dihubungkan */
  window.location.assign("http://127.0.0.1:5500/checkout.html");
}

function backPage() {
  window.location.assign("http://127.0.0.1:5500/index.html")
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

/*untuk mengatur sebuah halaman loading agar terlebih dahulu ditampilkan sebelum halaman utama masuk*/
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;
