const line = document.querySelector("nav")
addEventListener('scroll',() =>{
  if (scrollY == 0) {
    line.classList.add('active')
  } else  {
    line.classList.remove('active')
  }
});
