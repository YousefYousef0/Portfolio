


//typeStart
let TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="wrap">Hello I'm ${this.txt}</span>`;

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.04em solid #fff}";
    document.body.appendChild(css);
};
//typeEnd

let Lampa = document.querySelector(".Lampa");
let lampa3 = document.querySelector("#lampa3");
let toggle = true;
Lampa.onclick = function () {
    if (toggle == true) {
        lampa3.style.fill = "#EFE799";
        document.body.classList.remove("lightMode");
        document.body.classList.add("darkMode");
        toggle = false;
    }
    else {
        lampa3.style.fill = "#545454";
        document.body.classList.add("lightMode");
        document.body.classList.remove("darkMode");
        toggle = true;
    }
}

let navLeftA = document.querySelectorAll(".navLeft a");
let footerHome = document.querySelectorAll(".footerHome");

window.addEventListener("scroll", function () {
    let scrollY = window.scrollY || window.pageYOffset;
    if (scrollY < 780) {
        navLeftA[0].classList.add("activate");
        navLeftA[1].classList.remove("activate");
        navLeftA[2].classList.remove("activate");
    }
    else if (scrollY === document.documentElement.scrollHeight - window.innerHeight) {
        navLeftA[0].classList.remove("activate");
        navLeftA[1].classList.remove("activate");
        navLeftA[2].classList.add("activate");
    }
    else {
        navLeftA[0].classList.remove("activate");
        navLeftA[1].classList.add("activate");
        navLeftA[2].classList.remove("activate");
    }
});
navLeftA[0].addEventListener("click", function () {
    const Home = document.getElementById("Home");
    Home.scrollIntoView({ behavior: "smooth" });
});
navLeftA[1].addEventListener("click", function () {
    const Works = document.getElementById("Works");
    Works.scrollIntoView({ behavior: "smooth" });
});
navLeftA[2].addEventListener("click", function () {
    const Contact = document.getElementById("Contact");
    Contact.scrollIntoView({ behavior: "smooth" });
});
footerHome[0].addEventListener("click", function () {
    const Home = document.getElementById("Home");
    Home.scrollIntoView({ behavior: "smooth" });
});
footerHome[1].addEventListener("click", function () {
    const Home = document.getElementById("Home");
    Home.scrollIntoView({ behavior: "smooth" });
});



function initializeSlider(sliderClassName, circleClassName, imgClassName) {
    let slider = document.querySelector(sliderClassName);
    let circles = document.querySelectorAll(circleClassName);
    let img = document.querySelector(imgClassName);
    let currentIndex = 0;

    function switchToNext() {
        let nextIndex = (currentIndex + 1) % circles.length;

        circles.forEach(circle => {
            circle.classList.remove("fa-solid");
            circle.classList.add("fa-regular");
        });

        circles[nextIndex].classList.add("fa-solid");
        circles[nextIndex].classList.remove("fa-regular");

        img.classList.add("fade-out");
        setTimeout(function () {
            img.src = `https://yousefyousef0.github.io/Portfolio/assats/images/p${sliderClassName.slice(7)}/Proj${sliderClassName.slice(-1)}img${nextIndex + 1}.jpg`;
            img.classList.remove("fade-out");
        }, 500);
        currentIndex = nextIndex;
    }
    for (let i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", function () {
            switchToNext();
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setInterval(switchToNext, 5000);
                observer.disconnect();
            }
        });
    });
    observer.observe(slider);
}

initializeSlider(".slider1", ".circle1", ".slider1 img");
initializeSlider(".slider2", ".circle2", ".slider2 img");
initializeSlider(".slider3", ".circle3", ".slider3 img");
initializeSlider(".slider4", ".circle4", ".slider4 img");
initializeSlider(".slider5", ".circle5", ".slider5 img");
initializeSlider(".slider6", ".circle6", ".slider6 img");
initializeSlider(".slider7", ".circle7", ".slider7 img");














