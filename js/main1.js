 const contact =(name) => ({name})
 
 const contacts =  [ contact('+79895342777'), contact('alexruskor@gmail.com')]
$(document).ready(function(){
    $('.slider').slick({
        arrows:true, // показать стрелки
        dots:true, // не показывать точки
        autoplay: true,
        autoplaySpeed: 3000,
    })
});


(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset>50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());



document.body.onclick = (event) => {
    const elem = event.target;
    
    if (elem.classList.contains('copy_phone2')) {
        console.log(elem);
        navigator.clipboard.writeText('+79895342777')
        success_message.classList.add('active')
        setTimeout(()=> success_message.classList.remove('active'),2000)
    }  if (elem.classList.contains('copy_mail2')) {
        console.log(elem);
        navigator.clipboard.writeText('alexruskor@gmail.com')
        success_message.classList.add('active')
        setTimeout(()=> success_message.classList.remove('active'),2000)
    } 
}



Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
 new Vue ({
    el: '#app',
    data: {
        //show: false,
        contacts: contacts,
        contact: contacts[0],
        seen1: false,
        seen2: false
    },
    methods: {
        copy(field) {
          console.log('value', this.$refs[field].value)
        },handleScroll: function (evt, el) {
          
            el.setAttribute(
              'style',
              'opacity: 1; transform: translate3d(0,0, 0)'
            )
          
          
        }
      }

});




  new Vue({
    el: '#app1',
    methods: {
      handleScroll: function (evt, el) {
        if (window.scrollY > 350) {
          el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0,0, 0)'
          )
        }
        return window.scrollY > 580
      }
    }
  });
  new Vue({
    el: '#app2',
    methods: {
      handleScroll: function (evt, el) {
        if (window.scrollY > 980) {
          el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0,0, 0)'
          )
        }
        return window.scrollY > 990
      }
    }
  });

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.2] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.plans1');
  let elements1 = document.querySelectorAll('.image1');
  for (let elm of elements) {
    observer.observe(elm);
  }
  for (let elm of elements1) {
    observer.observe(elm);
  }
  
  
  
  // let options = {
  //   threshold: [0.5] };
  // let observer = new IntersectionObserver(onEntry, options);
  // let elements = document.querySelectorAll('.section1_main4');
  
  // for (let elm of elements) {
  //   observer.observe(elm);
   
//}
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0.6, // show, when scrolled 10% into view
  duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
.setClassToggle("#reveal1", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


//burger handler
(function() {
  const BurgerItem=document.querySelector('.burger');
  const menu=document.querySelector('.header_nav');
  const link1=document.querySelector('.hl1');
  const link2=document.querySelector('.hl2');
  const link3=document.querySelector('.hl3');
  const link4=document.querySelector('.hl4');
  const menyCloseItem=document.querySelector('.header_nav-close')
  BurgerItem.addEventListener('click', ()=>{
    menu.classList.add('header_nav_active')
  });
  menyCloseItem.addEventListener('click', ()=>{
    menu.classList.remove('header_nav_active')
  });
  link1.addEventListener('click', ()=>{
    menu.classList.remove('header_nav_active')
  });
  link2.addEventListener('click', ()=>{
    menu.classList.remove('header_nav_active')
  });
  link3.addEventListener('click', ()=>{
    menu.classList.remove('header_nav_active')
  });
  link4.addEventListener('click', ()=>{
    menu.classList.remove('header_nav_active')
  });
}());

jQuery(document).ready(function($){
  $('<style>'+
      '.scrollTop'//
  +'</style>').appendTo('body');
  var
  speed = 550,
  $scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');		
  $scrollTop.click(function(e){
      e.preventDefault();
      $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
  });

  //появление
  function show_scrollTop(){
      ( $(window).scrollTop() > 330 ) ? $scrollTop.fadeIn(700) : $scrollTop.fadeOut(700);
  }
  $(window).scroll( function(){ show_scrollTop(); } );
  show_scrollTop();
});

// Scroll to anchors
(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());
