var collapse = document.querySelector('.toogle')
var navbox = document.querySelector('.navBox')
let flag = 1

collapse.addEventListener('click' , ()=>{
   if(flag == 1)
   {
       navbox.classList.remove('nav')
       navbox.classList.add('navs')
       flag = 0;
   } 
   else
   {
       navbox.classList.remove('navs')
       navbox.classList.add('nav')
       flag = 1
   }
})