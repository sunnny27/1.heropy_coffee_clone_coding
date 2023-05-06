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
window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > 500) {
    // 페이지 스크롤 위치가 500이 넘을 때 Badge 요소 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

  // 페이지 스크롤 위치가 500이 넘지 않을 때
  } else {
    // Badge 요소 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
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
  autoplay: { 
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
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
