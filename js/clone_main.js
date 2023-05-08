// 상단 팝업
function slideUp() {
  var box = document.getElementById("box");
  var height = box.clientHeight;
  var animation = box.animate(
    [
      { height: height + "px" },
      { height: "0px" },
    ],
    {
      duration: 500,
      easing: "ease-out",
    }
  );
  animation.onfinish = function () {
    box.style.display = "none";
  };
}

// 검색창 요소찾기 (.search)
// 검색요소 searchEl 선언, 입력요소 searchinputEl 선언
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > 500) {
    // 페이지 스크롤 위치가 500이 넘을 때 Badge 요소 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });

  // 페이지 스크롤 위치가 500이 넘지 않을 때
  } else {
    // Badge 요소 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});
toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});

/* 상단 이미지 페이드인 */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로 보여지게 한다.
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

/* 슬라이드 요소 */
new Swiper('.notice .swiper', {
  direction: 'vertical', 
  autoplay: true,
  loop: true 
});

new Swiper('.promotion .swiper', {
  autoplay: { delay: 5000},  // 5초마다 슬라이드 바뀜
  loop: true, // 반복 재생 여부
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,

  pagination: { 
    el: '.promotion .swiper-pagination', 
    clickable: true 
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev', 
    nextEl: '.promotion .swiper-button-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true, 
  loop: true, 
  spaceBetween: 30, 
  slidesPerView: 5,
  navigation: { 
    prevEl: '.awards .swiper-button-prev', 
    nextEl: '.awards .swiper-button-next' 
  }
});

/* 프로모션 슬라이드*/

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

//토글 버튼을 클릭했을 때
promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});

//플로팅 요소 관리

gsap.to('.floating1', 1.5, {
  delay: 1, 
  y: 15,
  repeat: -1, 
  yoyo: true, 
  ease: Power1.easeInOut 
});
gsap.to('.floating2', 2, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();