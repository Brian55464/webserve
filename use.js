//Header
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuClose = document.querySelector('.menuclose');

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menuBtn.style.display = 'none';
    menu.classList.add('show');
  }

  menuClose.addEventListener('click', closeMenu);

  function closeMenu() {
    menuBtn.style.display = 'flex';
    menu.classList.remove('show');
  }

  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      closeMenu();
    }
  });
});


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

/*
document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 1000
  });
});
*/

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

//左右slider

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.slider-container');
  const content = document.querySelector('.slider-content');

  container.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    const scrollAmount = 200; // 每次滑动的距离

    if (delta > 0) {
      // 向下滚动，内容向右滑动
      container.scrollLeft += scrollAmount;
    } else {
      // 向上滚动，内容向左滑动
      container.scrollLeft -= scrollAmount;
    }
  });
});


//浮出式div
document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup');
  var sections = document.getElementsByClassName('container')[0].children;

  function togglePopup() {
    popup.style.display = (popup.style.display === 'none') ? 'block' : 'none';
  }

  function hidePopup() {
    popup.style.display = 'none';
  }

  window.addEventListener('scroll', function() {
    for (var i = 0; i < sections.length; i++) {
      var rect = sections[i].getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) {
        hidePopup();
        break;
      }
    }
  });

  window.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
});