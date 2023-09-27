(function() {
  // Navbar effects and scrolltop buttons upon scrolling
  const navbar = document.getElementById('header-nav')
  var body = document.getElementsByTagName("body")[0]
  const scrollTop = document.getElementById('scrolltop')
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed-top', 'shadow-sm')
      body.style.paddingTop = navbar.offsetHeight + "px"
      scrollTop.style.visibility = "visible";
      scrollTop.style.opacity = 1;
    } else {
      navbar.classList.remove('fixed-top', 'shadow-sm')
      body.style.paddingTop = "0px"
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = 0;
    }
  };
    // Porfolio isotope and filter
    window.addEventListener('load', () => {
      let portfolioContainer = document.querySelector('.portfolio-container');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item'
        });
  
        let portfolioFilters = document.querySelectorAll('#portfolio-flters li');
        portfolioFilters.forEach(el =>{
            el.addEventListener('click',(e)=>{
                e.preventDefault();
                portfolioFilters.forEach(function(el) {
                  el.classList.remove('filter-active');
                });
                el.classList.add('filter-active');
        
                portfolioIsotope.arrange({
                  filter: el.getAttribute('data-filter')
                })
            })
        })
      }
    });
    // Initiate portfolio lightbox 
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });
  })()