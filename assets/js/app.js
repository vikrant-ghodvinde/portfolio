const preload = () => {
  document.querySelector('.preloader').style.display = 'none';
}

window.addEventListener('scroll', () =>{
  document.querySelector('header').classList.toggle('scroll-active', scrollY > 0);
});

function rspToggler(){
  document.querySelector('.rsp-toggler').classList.toggle('active');
  document.querySelector('.menus').classList.toggle('active');
}

// navbar-scroll menu
// const menuItem = document.querySelectorAll('.menus a li');
// const sections = document.querySelectorAll('section');
//
// function activeMenuItem(){
//   let sectionLen = sections.length();
//   while(--sectionLen && window.scrollY + 97 < sections[sectionLen].offsetTop){}
//   menuItem.forEach(item => item.classList.remove('active'));
//   menuItem[sectionLen].classList.add('active');
// }
// activeMenuItem();
// window.addEventListener('scroll',activeMenuItem);

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:2,
        nav:true,
        loop:false
      }
    }
  });

  // check fields
  $('#sendEmail').click(function() {
    if ($('#name').val().length === 0) {
      $('#forName').css('display', 'inline-block');
    }else{
      $('#forName').css('display', 'none');
    }

    if ($('#email').val().length === 0) {
      $('#forEmail').css('display', 'inline-block');
    }else{
      $('#forName').css('display', 'none');
    }

    if ($('#subject').val().length === 0) {
      $('#forSubject').css('display', 'inline-block');
    }else{
      $('#forSubject').css('display', 'none');
    }

    if ($('#message').val().length === 0) {
      $('#forMessage').css('display', 'inline-block');
    }else{
      $('#forMessage').css('display', 'none');
    }
  });
});

// name
$('#name').keyup(function() {
  if ($(this).val().length !== 0) {
    $('#forName').css('display', 'none');
  }
  else{
    $('#forName').css('display', 'inline-block');
  }
});

// email
$('#email').keyup(function() {
  if ($(this).val().length !== 0) {
    $('#forEmail').css('display', 'none');
  }
  else{
    $('#forEmail').css('display', 'inline-block');
  }

  // email check
  var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
  if(!re) {
    $('#forEmail').css('display', 'inline-block');
    $('#forEmail').html("Value does not match email format");;
  } else {
    $('#forEmail').css('display', 'none');
  }
});

// subject
$('#subject').keyup(function() {
  if ($(this).val().length !== 0) {
    $('#forSubject').css('display', 'none');
  }
  else{
    $('#forSubject').css('display', 'inline-block');
  }
});

// message
$('#message').keyup(function() {
  if ($(this).val().length !== 0) {
    $('#forMessage').css('display', 'none');
  }
  else{
    $('#forMessage').css('display', 'inline-block');
  }
});

// preloader
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
.add({
  targets: '.ml4 .letters-1',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
})
.add({
  targets: '.ml4 .letters-1',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
})
.add({
  targets: '.ml4 .letters-2',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
})
.add({
  targets: '.ml4 .letters-2',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
})
.add({
  targets: '.ml4 .letters-3',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
})
.add({
  targets: '.ml4 .letters-3',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
})
.add({
  targets: '.ml4 .letters-4',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
})
.add({
  targets: '.ml4 .letters-4',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
})
.add({
  targets: '.ml4 .letters-5',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
})
.add({
  targets: '.ml4 .letters-5',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
})
.add({
  targets: '.ml4',
  opacity: 0,
  duration: 500,
  delay: 500
});
