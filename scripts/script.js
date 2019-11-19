
function sectionAppear(){
    var introText = document.querySelector('.section1');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(introPosition < screenPosition){
        introText.classList.add('sectionAppear');
    }   
}

window.addEventListener('scroll', sectionAppear);

function sectionAppear2(){
    var introText = document.querySelector('.section2');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(introPosition < screenPosition){
        introText.classList.add('sectionAppear');
    }   
}
window.addEventListener('scroll', sectionAppear2);

function sectionAppear3(){
    var introText = document.querySelector('.cover-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(introPosition < screenPosition){
        introText.classList.add('sectionAppear');
    }   
}

window.addEventListener('load', sectionAppear3);


function sectionAppear4(){
    var introText = document.querySelector('.contact');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(introPosition < screenPosition){
        introText.classList.add('sectionAppear');
    }   
}

window.addEventListener('scroll', sectionAppear4);
