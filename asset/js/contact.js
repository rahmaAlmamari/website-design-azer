document.addEventListener("DOMContentLoaded", function() {
    const contactDetail = document.querySelector('.contact-detail');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function onScroll() {
      if (isInViewport(contactDetail)) {
        contactDetail.classList.add('animate');
        window.removeEventListener('scroll', onScroll);
      }
    }

    window.addEventListener('scroll', onScroll);
    // Check if element is in viewport on page load
    onScroll();
  });