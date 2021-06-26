burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
manus = document.querySelector('.manus')
logo = document.querySelector('.logo')

burger.addEventListener('click', ()=>{
  manus.classList.toggle('nav-vis');
  logo.classList.toggle('nav-vis');
  navbar.classList.toggle('nav-height');
})
