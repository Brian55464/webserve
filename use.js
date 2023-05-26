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

document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 1000
  });
});

document.addEventListener('DOMContentLoaded', function() {
  function updateProgressBar() {
    const progressBar = document.querySelector('.progress');
    const progressImage = document.querySelector('.progress-image');
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const progress = (scrolled / pageHeight) * 100;
    progressBar.style.width = progress + '%';
    progressImage.style.left = progress + '%';
  }

  window.addEventListener('scroll', updateProgressBar);
  window.addEventListener('resize', updateProgressBar);
});