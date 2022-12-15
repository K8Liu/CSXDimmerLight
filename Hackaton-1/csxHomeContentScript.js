// This changes the homepage background to black

const body = document.querySelector("#app > div > div.learn-home > main");
body.style.backgroundColor = 'black';

const theDivs = document.querySelectorAll('.well.well-csx.learn-home-cards-lg');

function stylize() {
    for (let i = 0; i < 12; i++) {
        theDivs[i].style.backgroundColor = 'rgb(212,212,212)';
    }
}
stylize();