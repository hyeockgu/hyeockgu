const toggleBtn = document.querySelector('.toogleBtn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

window.onscroll = function() {
  topFunction()
};
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function topFunction() {
  if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky")
  } else {
      navbar.classList.remove("sticky")
  }
}