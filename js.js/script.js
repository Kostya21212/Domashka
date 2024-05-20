const slider = document.querySelector('.slider')
const sliderLeft = document.querySelector('.slider__left')
const sliderRight = document.querySelector('.slider__right')
const slidesCounter = sliderRight.querySelectorAll('div').length
const dwnBtn = document.querySelector('.dwn-btn')
const upBtn = document.querySelector('.up-btn')

//стартове значення змінної для активного слайду
let activeSlideIndex = 0


sliderLeft.style.top = `-${(slidesCounter -1)*100}vh`

upBtn.addEventListener('click', function () {
    nextSlide('up')
})
dwnBtn.addEventListener('click', function () {
    nextSlide('down')
})



function nextSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === 1){
            upBtn.style.backgroundColor = 'rgb(237, 192, 13)'
            upBtn.style.color = 'white'
            console.log(activeSlideIndex)
        }else if (activeSlideIndex === 2){
            upBtn.style.backgroundColor = 'rgb(215, 43, 23)'
            upBtn.style.color = 'white'
            console.log(activeSlideIndex)
        }else if (activeSlideIndex === 3){
            upBtn.style.backgroundColor = 'rgb(76, 76, 215)'
            upBtn.style.color = 'white'
            console.log(activeSlideIndex)
        }else if (activeSlideIndex === 0){
            upBtn.style.backgroundColor = 'rgb(13, 237, 103)'
            upBtn.style.color = 'white'
            console.log(activeSlideIndex)
        }
        if (activeSlideIndex === slidesCounter) {
            activeSlideIndex = 0
            upBtn.style.backgroundColor = 'black'
            upBtn.style.color = 'white'
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        dwnBtn.style.backgroundColor = 'red'
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCounter - 1
            dwnBtn.style.backgroundColor = 'orange'
            
        }
        if(activeSlideIndex === 1){
                dwnBtn.style.backgroundColor = 'rgb(237, 192, 13)'
                dwnBtn.style.color = 'white'
                console.log(activeSlideIndex)
            }else if (activeSlideIndex === 2){
                dwnBtn.style.backgroundColor = 'rgb(215, 43, 23)'
                dwnBtn.style.color = 'white'
                console.log(activeSlideIndex)
            }else if (activeSlideIndex === 3){
                dwnBtn.style.backgroundColor = 'rgb(76, 76, 215)'
                dwnBtn.style.color = 'white'
                console.log(activeSlideIndex)
            }else if (activeSlideIndex === 0){
                dwnBtn.style.backgroundColor = 'rgb(13, 237, 103)'
                dwnBtn.style.color = 'white'
                console.log(activeSlideIndex)
            }

           
    }
  
    const height = slider.clientHeight


    sliderLeft.style.transform = `translateY(${activeSlideIndex*height}px)`
    sliderRight.style.transform = `translateY(-${activeSlideIndex*height}px)`
}