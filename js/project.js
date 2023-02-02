const ibtn = document.querySelector('.fa-plus');
const dropmenu = document.querySelector('.dropmenu');

ibtn.addEventListener('click', () => 
ibtn.classList.toggle('active')
);
ibtn.addEventListener('click', () => 
dropmenu.classList.toggle('active')
);

/* 
내가싸지른 코드 잔재
const scrollY = document.querySelector(scrollY);
const article = document.querySelector('.article')
if (scrollY) {
  scrollY >= 306 (
    article.classList.add('list')
  )
} else {
  
}; */


// 페이지전환효과
jQuery(function($) {
  $("body").css("display", "none");
  $("body").fadeIn(1000);
  $("a.transition").click(function(event){
      event.preventDefault();
      linkLocation = this.href;
      $("body").fadeOut(1000, redirectPage);
  });
  function redirectPage() {
  window.location = linkLocation;
  }
});