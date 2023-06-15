
//banner slider
const swiper = new Swiper('.slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }  
  });


//movie
const swiper2 = new Swiper('.swiper-container2', {
  // Optional parameters
  loop: true,
  slidesPerView:4,
  spaceBetween: 10,
  breakpoints: {
    // 뷰포터의 넓이 >= 0px
    0: {
      slidesPerView: 1.4,
      spaceBetween: 24
    },
    // 뷰포터의 넓이 >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    // 뷰포터의 넓이 >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    // 뷰포터의 넓이 >= 960px
    960: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});

//movie tab menu
let movBtn = $('.movie_title ul li');
let movCont = $('.movie_chart>div');

movCont.hide().eq(0).show();/* 1번째 애만 보이게 */
movBtn.click(function(e){
  e.preventDefault();
  let target=$(this);//클릭한 li
  let index=target.index();//클릭한 li의 index번호 추출
  console.log(index);
  movCont.hide().eq(index).show();//모두 지우고 해당 index번호의 슬라이드 보이기
  movBtn.removeClass('active')//모든 li에 active지우기
  target.addClass('active')//클릭한 li에 active추가
});


//공지사항 notice
let tabmenu = $('.notice');

tabmenu.find('ul>li>ul').hide();
tabmenu.find('ul>li.active>ul').show();

tabmenu.find('ul>li>a').click(function(e){
  e.preventDefault();
  let target=$(this);/* 내가 클릭한 것 */
  tabmenu.find('ul>li>a').next().hide();
  target.next().show();
  /*
  .next() -> 나의 바로 아래동생 
  .nextAll() -> 나의 아래 동생들
  */

  tabmenu.find('ul>li').removeClass('active');
  target.parent().addClass('active');
  /*
  .parent() -> 상위요소(부모)
  .parents() -> 상위요소들
  */
})