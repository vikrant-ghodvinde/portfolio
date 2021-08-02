window.addEventListener('scroll', ()=>{
  navbar = document.querySelector('nav');
  navbar.classList.toggle('active', window.scrollY > 0);
});

function menuList(){
  menu = document.querySelector('.toggle-List');
  navbar = document.querySelector('nav');
  menu.classList.toggle('active');
  navbar.classList.toggle('active2');
}
