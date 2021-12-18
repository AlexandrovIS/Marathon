const upBnt =document.querySelector('.up-button')
const downBnt =document.querySelector('.down-button')
const sidebar=document.querySelector('.sidebar')
const mainSlide=document.querySelector('.main-slide')

const container=document.querySelector('.container')
const slideCount=mainSlide.querySelectorAll('div').length

let activeSlideIndex=0

sidebar.style.top=`-${(slideCount-1)*100}vh`

upBnt.addEventListener('click',()=>{
  changeSlide('up')
})

downBnt.addEventListener('click',()=>{
  changeSlide('down')
})

function changeSlide(direction){
  if(direction==='up'){
    activeSlideIndex++
    if(activeSlideIndex===slideCount){
      activeSlideIndex=0
    }
  } else if(direction==='down'){
    activeSlideIndex--
    if(activeSlideIndex<0){
      activeSlideIndex=slideCount-1
    }
  }

  const heigt = container.clientHeight
  mainSlide.style.transform=`translateY(-${activeSlideIndex*heigt}px)`
  sidebar.style.transform=`translateY(${activeSlideIndex*heigt}px)`
}


