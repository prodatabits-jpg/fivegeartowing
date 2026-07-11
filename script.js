const heroImages = [
    "truck1.jpeg",
    "truck2.jpeg",
    "truck3.jpeg",
    "truck4.jpeg",
    "truck5.jpeg"
];

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

let current = 0;
let showingFirst = true;

bg1.style.backgroundImage = `url('${heroImages[0]}')`;

function rotateHero(){

    current = (current + 1) % heroImages.length;

    if(showingFirst){

        bg2.style.backgroundImage = `url('${heroImages[current]}')`;

        bg2.style.opacity = 1;
        bg1.style.opacity = 0;

    }else{

        bg1.style.backgroundImage = `url('${heroImages[current]}')`;

        bg1.style.opacity = 1;
        bg2.style.opacity = 0;

    }

    showingFirst = !showingFirst;
}

setInterval(rotateHero,4000);

const slides=document.querySelector('.slides');
document.getElementById('next').onclick=()=>slides.scrollBy({left:340,behavior:'smooth'});
document.getElementById('prev').onclick=()=>slides.scrollBy({left:-340,behavior:'smooth'});
