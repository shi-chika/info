
window.addEventListener('load', function(){
  var loader = document.getElementById('loader');
  loader.style.display = 'none';
});

window.addEventListener('scroll', function() {
  const homeNav = document.querySelector('.homeHeader');

    if (window.scrollY > 100) {
      // homeNav.style.backgroundColor = 'rgba(201, 205, 191, 0.4)';
      homeNav.style.backdropFilter = ' blur(20px)';
     
    } else {
      
      homeNav.style.backdropFilter = ' blur(0px)';
     
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
  if (window.scrollY > 300) {
    aboutTop.style.display = "block"
   
  } else {
    aboutTop.style.display = "none"
   
  }
});

const model = document.querySelector('.model');
const contactBtn = document.querySelector(".contactBtn");

contactBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  
  model.style.display = 'block';
  document.body.classList.add('noscroll');
})
const contactBtnSp = document.querySelector(".contactBtn-sp");
contactBtnSp.addEventListener('click',(e)=>{
  e.preventDefault();
 
  model.style.display = 'block';
  document.body.classList.add('noscroll');
})

const closeModelBtn = document.querySelector("#closeModel");
closeModelBtn.addEventListener('click',(e)=>{
  e.target.closest('.model').style.display = 'none';
  document.body.classList.remove('noscroll');
})

  

  