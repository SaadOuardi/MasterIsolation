// SLIDER :
let slider = document.getElementById('header__slider');

// LIST OF BACKGROUND :
let sliderBackground = ['./IMG/slider/img-----1.webp',
                        './IMG/slider/img---2.png',
                        './IMG/slider/img---3.jpg',
                    ];
                    
// DEFAULT INDEX :
let index = 0;

// BY DEFAULT SLIDER SHOULD HAVE THE FIRST BACKGROUND WITH INDEX 0
slider.style.backgroundImage =  `url('${sliderBackground[index]}')`;

// APPEND CIRCLES DEPENDS ON HOW MANY IMAGE WE HAVE
const CircleDiv = document.querySelector('.circles');

for( let i=0; i< sliderBackground.length ; i++){
    const circle = document.createElement('div');
    circle.className = 'circle';
    CircleDiv.appendChild(circle);
}
const circle = document.querySelectorAll('.circle');
circle[0].className = 'active';

// TOGGLE RIGHT TO SHOW NEXT BACKGROUND IMAGE
function ToggleRight(){
    if(index === sliderBackground.length -1 ){
        circle[index].className = 'circle';
        index = 0;
    }else{
        circle[index].className = 'circle';
        index +=1;
    }

    circle[index].className = 'active';
    // SHOW THE BACKGROUND WITH SPECEFIC INDEX
    slider.style.backgroundImage = `url('${sliderBackground[index]}')`;

};

// TOGGLE LEFT TO SHOW PREVIOUS BACKGROUND IMAGE
function ToggleLeft(){
    if(index === 0){
        circle[index].className = 'circle';
        index = sliderBackground.length -1;
        circle[index].className = 'active';
    }else{
        circle[index].className = 'circle';
        index -= 1;
        circle[index].className = 'active';
    }
    // SHOW THE BACKGROUND WITH SPECEFIC INDEX
    slider.style.backgroundImage = `url('${sliderBackground[index]}')`;

};

setInterval(ToggleRight, 2000);
