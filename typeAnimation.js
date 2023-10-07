let border = document.getElementsByClassName('border')[0];
border = border.getBoundingClientRect()
const borderWidth = border.width;
const borderHeight = border.height;

const myRandom = (min, max) => Math.random() * (max - min) + min

function createDroplet() {
    const top = myRandom(0.1, 0.9) * borderHeight;
    const left = myRandom(0.1, 1) * borderHeight;
    const droplet = document.createElement('div');
    droplet.style.position = "absolute"
    const border = document.getElementsByClassName("border")[0];
    border.appendChild(droplet);

    droplet.style.top = top + 'px';
    droplet.style.left = left + 'px';
    droplet.classList.add('circle')

    droplet.addEventListener('animationend', function () {
        droplet.parentNode.removeChild(droplet)
    })
}

setInterval(() => {
    createDroplet();
}, 4400);

setInterval(() => {
    createDroplet();
}, 2800);

setInterval(() => {
    createDroplet();
}, 1800);

setInterval(() => {
    createDroplet();
}, 6000);


setInterval(() => {
    createDroplet();
}, 3400);




