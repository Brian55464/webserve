window.addEventListener("load", function() {
  var loaderWrapper = document.querySelector(".loader-wrapper");
  var loaderImg = document.querySelector(".loader-img");

   // 设置延迟隐藏加载动画的时间（单位：毫秒）
   var delay = 2000;
          
   setTimeout(function() {
       loaderWrapper.style.display = "none";
   }, delay);
  
  // 淡入效果
  loaderWrapper.classList.add("fade-in");
  
  // 延迟执行由小变大动画
  setTimeout(function() {
      loaderImg.classList.add("scale-up");
  }, 500);

  //淡出效果
  setTimeout(function() {
    loaderWrapper.classList.add("fade-out");
  }, 1500);
});

window.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: false, // 禁用滑鼠滾輪滾動
  });

  var prevButton = document.getElementById('prevButton');
  var nextButton = document.getElementById('nextButton');

  prevButton.addEventListener('click', function() {
    swiper.slidePrev();
  });

  nextButton.addEventListener('click', function() {
    swiper.slideNext();
  });

  swiper.on('slideChange', function() {
    console.log('當前幻燈片索引：', swiper.activeIndex);

    if (swiper.activeIndex === 0) {
      // 禁用向上滑動
      swiper.allowSlidePrev = false;
      // 啟用向下滑動
      swiper.allowSlideNext = true;
    } else if (swiper.activeIndex === 2) {
      // 啟用向上滑動
      swiper.allowSlidePrev = true;
      // 禁用向下滑動
      swiper.allowSlideNext = false;
    } else {
      // 啟用向上滑動
      swiper.allowSlidePrev = true;
      // 啟用向下滑動
      swiper.allowSlideNext = true;
    }
  });

  // 捕捉網頁滾動事件
  window.addEventListener('scroll', function() {
    // 檢查是否已滾動到幻燈片的範圍外
    if (window.scrollY > swiper.$el.offsetTop + swiper.$el.offsetHeight) {
      // 回到第一張幻燈片
      swiper.slideTo(0);
    }
  });
});
