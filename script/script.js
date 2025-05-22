$(document).ready(function () {
  // 새로고침 시 최상단으로------------------------------------------------------
  // $(document).ready(function () {
  //   $(window).scrollTop(0);
  // });


  // AOS 커스텀 ----------------------------------------------------------------
  AOS.init({
    once: true,
  });


  // 탑메뉴 3개 언더라인 --------------------------------------------------------
  $(".menu_category, .sub_menu, .main_menu_content > li:last-child > a").hover(
    function () {
      $(".always_active").addClass("temp_inactive");
    },
    function () {
      $(".always_active").removeClass("temp_inactive");
    }
  );


  // 카테고리 메뉴바 슬라이드 ---------------------------------------------------
  $(".main_menu_content > li").hover(
    function () {
      $(this).find(".sub_menu").addClass("active");
    },
    function () {
      $(this).find(".sub_menu").removeClass("active");
    }
  );


  // contents 1, 2, my_class 슬라이드 --------------------------------------------
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 6,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: false,
    centeredSlides: false, //왼쪽 정렬
    watchOverflow: true, //슬라이드 개수 부족하면 네비게이션 비활성화

    // 반응형
    breakpoints: {
        1400: { slidesPerView: 6 },
        1200: { slidesPerView: 5 },
        992: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        576: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
    }
  });

  // 윈도우 크기 변경시 슬라이드 새로고침 되게
  var resizeTimer;
  $(window).on("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
          swiper.update();
      }, 300);
  });


  // 모바일 햄버거 메뉴 -----------------------------------------------------
  $('.m_hamburger_btn').on('click', function() {
      $('.m_menu').addClass('show');
  });

  $('.m_menu_close').on('click', function() {
      $('.m_menu').removeClass('show');
  });

});