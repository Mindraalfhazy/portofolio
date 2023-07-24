// tombol hamburger
const hamburgerMenu = document.querySelector('#hamburger');
const navbar = document.querySelector('#nav-menu');
hamburgerMenu.addEventListener('click', function(){
  hamburgerMenu.classList.toggle('tgl-hamburger');
  navbar.classList.toggle('hidden');

});

// header fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const navFix = header.offsetTop;
  const cs = document.querySelector('#cs');
  
  if(window.pageYOffset > navFix ){
    header.classList.add('navbar-fixed');
    cs.classList.remove('hidden');
    cs.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        cs.classList.remove('flex');
    cs.classList.add('hidden');
    }
};

// refresh
  document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload();
    alert('Pesan anda sudah berhasil terkirim!');
  });


var submitBtn = document.getElementById("submit-btn");
var closePopupBtn = document.getElementById("close-popup-btn");
var popup = document.getElementById("popup");

submitBtn.addEventListener("click", function() {
  popup.classList.remove("hidden");
});

closePopupBtn.addEventListener("click", function() {
  popup.classList.add("hidden");
});

// aos
  document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
  });

  
