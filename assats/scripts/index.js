


//typeStart
    let TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
  
    TxtType.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if(this.isDeleting){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else{
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

        setTimeout(function() {
            that.tick();
        }, delta);
    };
  
    window.onload = function() {
        let elements = document.getElementsByClassName('typewrite');
        for (let i=0; i<elements.length; i++) {
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
Lampa.onclick = function(){
    if(toggle == true){
        lampa3.style.fill = "#EFE799";
        toggle = false;
    }
    else{
        lampa3.style.fill = "#545454";
        toggle = true;
    }
}


let ProjImg = document.querySelector(".ProjImgs");
let slider1 = document.querySelector(".slider1 img");
let slider2 = document.querySelector(".slider2 img");
let slides1 = document.querySelectorAll(".slide1");
let slides2 = document.querySelectorAll(".slide2");

if(ProjImg.className.includes("slider1")){
    for (let i = 0; i < slides1.length; i++) {
        slides1[i].addEventListener("click", function() {
            slides1.forEach(slide => {
                slide.classList.remove("fa-solid");
                slide.classList.add("fa-regular");
            });
    
            slides1[i].classList.add("fa-solid");
            slides1[i].classList.remove("fa-regular");
    
            slider1.classList.add("fade-out");
            setTimeout(function() {
                slider1.src = `/assats/images/p1/Proj1img${i + 1}.jpg`;
                slider1.classList.remove("fade-out");
            }, 500);
        });
    }
}
if(ProjImg.className.includes("slider2")){
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].addEventListener("click", function() {
            slides2.forEach(slide => {
                slide.classList.remove("fa-solid");
                slide.classList.add("fa-regular");
            });
    
            slides2[i].classList.add("fa-solid");
            slides2[i].classList.remove("fa-regular");
    
            slider2.classList.add("fade-out");
            setTimeout(function() {
                slider2.src = `/assats/images/p1/Proj2img${i + 1}.jpg`;
                slider2.classList.remove("fade-out");
            }, 500);
        });
    }
}




function sliders(){
    
}












