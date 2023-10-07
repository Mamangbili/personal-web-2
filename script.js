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


var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


function typeEffect(text, element) {
    var i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 70);
        }
    }

    type();
}

// Example usage:
const text = "Welcome Stranger! Have take a look";
const element = document.getElementById("type-effect");

typeEffect(text, element);

