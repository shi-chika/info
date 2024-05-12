
window.addEventListener('load', function(){
  var loader = document.getElementById('loader');
  loader.style.display = 'none';
});

window.addEventListener('scroll', function() {
  const homeNav = document.querySelector('.homeHeader');

    if (window.scrollY > 100) {
      homeNav.style.backgroundColor = 'rgba(201, 205, 191, 0.4)';
     
    } else {
      homeNav.style.backgroundColor = 'rgba(39,39,39,1)';
     
    }
});

window.addEventListener('scroll', function() {
  const homeTop = document.querySelector('.homeTopBox');
  if (window.scrollY > 300) {
    homeTop.style.display = "block"
   
  } else {
    homeTop.style.display = "none"
   
  }
});

window.addEventListener('scroll', function() {
  const aboutTop = document.querySelector('.aboutTopBtn');
  if (window.scrollY > 100) {
    aboutTop.style.display = "block"
   
  } else {
    aboutTop.style.display = "none"
   
  }
});

// aboutHamGroup

// window.addEventListener('scroll', function() {
//   const aboutMenu = document.querySelector('.aboutHamGroup');
//   if (window.scrollY > 50) {
//     aboutMenu.style.bottom = "0"
   
//   } else {
//     aboutMenu.style.bottom = "10%"
   
//   }
// });

  

  