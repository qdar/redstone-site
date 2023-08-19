let burger  = document.querySelectorAll('.js-burger');
let menu    = document.querySelector('.burger__panel');
let burgerButton  = document.querySelector('.burger')
let i;
for (i = 0; i < burger.length; i++) {
  burger[i].onclick = function() {
    menu.classList.toggle("active");
    burgerButton.classList.toggle("burger--open");
  }
};


let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 400
});


window.onscroll = function() {myFunction()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
}

const swiper = new Swiper('.partners__slider', {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
});

const swiperSolutions = new Swiper('.solutions__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiperCredentials = new Swiper('.credentials__slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

const swiperIndustries = new Swiper('.industries__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerColumnFill: 'row',

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1360: {
      slidesPerView: 2,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
    },
  },

});


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('animation--run');
    }
  });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');

for (let elm of elements) {
  observer.observe(elm);
}
