const hero=document.querySelector('.hero');
const heroImages=['truck1.jpeg','truck2.jpeg','truck3.jpeg','truck4.jpeg','truck5.jpeg'];
let i=0;
function rotateHero(){
 hero.style.backgroundImage=`linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url('${heroImages[i]}')`;
 i=(i+1)%heroImages.length;
}
rotateHero();
setInterval(rotateHero,4000);

const slides=document.querySelector('.slides');
document.getElementById('next').onclick=()=>slides.scrollBy({left:340,behavior:'smooth'});
document.getElementById('prev').onclick=()=>slides.scrollBy({left:-340,behavior:'smooth'});
