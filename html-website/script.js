document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const arrow = this.querySelector('.arrow-image');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.opacity = 0;
        arrow.style.transform = 'rotate(0deg)';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = 1;
        arrow.style.transform = 'rotate(-90deg)';
      }
    });
  });
});



window.addEventListener('scroll', function() {
  const words = document.querySelectorAll('.fourth-part-second-section .word');
  const box = document.querySelector('.fourth-part-second-section');
  const boxRect = box.getBoundingClientRect();
  const boxTop = boxRect.top + window.scrollY;
  const boxHeight = boxRect.height;
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  const transitionStart = boxTop * 1.12 - viewportHeight;
  const transitionEnd = boxTop + boxHeight * 1.5;

  let transitionProgress = 0;

  if (scrollPosition + viewportHeight > boxTop && scrollPosition < transitionEnd) {
    transitionProgress = Math.min(Math.max((scrollPosition - transitionStart) / (boxHeight * 1.5), 0), 1);
  }

  words.forEach((word, index) => {
    const threshold = (index + 1) / words.length;
    
    if (transitionProgress > threshold) {
      let r = Math.round(47 + (255 - 47) * transitionProgress);
      let g = Math.round(19 + (255 - 19) * transitionProgress);
      let b = Math.round(69 + (255 - 69) * transitionProgress);

      word.style.color = `rgb(${r}, ${g}, ${b})`;
    } else {
      word.style.color = 'rgb(47, 19, 69)';
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('scroll-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('sixth-part-id').scrollIntoView({
      behavior: 'smooth'
    });
  });
});