const hero = document.querySelector(".hero");

const images = [

"https://images.unsplash.com/photo-1604881991720-f91add269bed",
"https://images.unsplash.com/photo-1596464716127-f2a82984de30",
"https://images.unsplash.com/photo-1588072432836-e10032774350",
"https://images.unsplash.com/photo-1607453998774-d533f65dac99"

];

let i = 0;

function changeBackground(){

hero.style.backgroundImage = `url(${images[i]})`;

i++;

if(i === images.length){
i = 0;
}

}

changeBackground();

setInterval(changeBackground,4000);
