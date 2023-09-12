let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');
        
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
        
let span1 = document.getElementsByClassName('modal-close')[0];
let span2 = document.getElementsByClassName('modal-close')[1];
let span3 = document.getElementsByClassName('modal-close')[2];
let span4 = document.getElementsByClassName('modal-close')[3];
        

        btn1.onclick = function() {
            modal1.style.visibility = 'visible';
        }
        btn2.onclick = function() {
            modal2.style.visibility = 'visible';
        }
        btn3.onclick = function() {
            modal3.style.visibility = 'visible';
        }
        btn4.onclick = function() {
            modal4.style.visibility = 'visible';
        }

        span1.onclick = function() {
            modal1.style.visibility = 'hidden';
        }
        span2.onclick = function() {
            modal2.style.visibility = 'hidden';
        }
        span3.onclick = function() {
            modal3.style.visibility = 'hidden';
        }
        span4.onclick = function() {
            modal4.style.visibility = 'hidden';
        }

        window.onclick = function(event) {
           
            if (event.target === modal1) {
                modal1.style.visibility = 'hidden';
            } else if (event.target === modal2) {
                modal2.style.visibility = 'hidden';
            } else if (event.target === modal3) {
                modal3.style.visibility = 'hidden';
            } else if (event.target === modal4) {
                modal4.style.visibility = 'hidden';
            }
        };



        let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const nextButton = document.querySelector('.slider__next');
const prevButton = document.querySelector('.slider__prev')

nextButton.addEventListener('click', function() {
    offset = offset + 1040;
    if (offset > 3120) {
    offset = 0; 
    
    }

    sliderLine.style.left = -offset + 'px';
    });

prevButton.addEventListener('click', function() {
        offset = offset - 1040;
        if (offset < 0) {
        offset = 3120; }
    
        sliderLine.style.left = -offset + 'px';
        });
        
        
