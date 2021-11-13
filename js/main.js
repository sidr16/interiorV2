const btnPrev = document.getElementById("img-prev")
const btnNext = document.getElementById("img-next")
const sliderPrev = document.getElementById("sliderPrev")
const sliderNext = document.getElementById("sliderNext")
const controlLine = document.querySelector('.banner__control-line div')

let imgIndex = 0

let imgArray = [
    'img/slider-img1.jpg',
    'img/slider-img2.jpg',
    'img/slider-img3.jpg',
    'img/slider-img4.jpg'
]

btnNext.addEventListener('click', () => {
    document.getElementById('sliderImg1').classList.toggle('slide-active');

    if(imgIndex == 3) {
        imgIndex = 0;
    } else {
        imgIndex++;
    }

    console.log(imgIndex)

    document.getElementById('sliderImg1').setAttribute('src', imgArray[imgIndex]);
    document.getElementById('sliderImg2').setAttribute('src', imgArray[imgIndex]);


    controlLine.style.left = 25 * imgIndex + '%'
    
    document.querySelector('.banner__control-index').innerHTML = (imgIndex + 1) + '/4'
})

btnPrev.addEventListener('click', () => {

    if(imgIndex <= 0) {
        imgIndex = 3
        console.log(imgIndex)
    } else {
        imgIndex--;
        console.log(imgIndex)
    }

    document.getElementById('sliderImg1').setAttribute('src', imgArray[imgIndex]);
    document.getElementById('sliderImg2').setAttribute('src', imgArray[imgIndex]);
    
    controlLine.style.left = 25 * imgIndex + '%'

    document.querySelector('.banner__control-index').innerHTML = (imgIndex + 1) + '/4'
    
})

let slideIndex = 0

let slideTrack = document.querySelector('.slider__track')
let siderInner = document.querySelector('.slider__inner')

sliderNext.addEventListener('click', () => {
    console.log(slideIndex)
    slideIndex++
    slideTrack.style.left = -350 * slideIndex + 'px'

    if(slideTrack.style.left <= -1050 + 'px') {
        slideIndex = 0
        slideTrack.style.left = 0
    }
    console.log(slideIndex)

    
})

sliderPrev.addEventListener('click', () => {
    console.log(slideIndex)

    if (slideTrack.style.left >= 0 + 'px') {
        slideIndex = 3
    } 

    slideTrack.style.left = -350 * (slideIndex - 1) + 'px'

    slideIndex--
    console.log(slideIndex)

})