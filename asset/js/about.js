document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY;
  
      elements.forEach(function(element) {
        var elementHeight = element.clientHeight;
        var elementTop = element.getBoundingClientRect().top + scrollY;
  
        if (scrollY + windowHeight > elementTop + elementHeight / 4) {
          element.classList.add('in-view');
        }
      });
    }
  
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Initial check in case the element is already in view
  });
  