function chooseImage(activeImage=0){
  const slides=document.querySelectorAll('.slide')
  slides[activeImage].classList.add('active')

  slides.forEach(item=>item.addEventListener('click',()=>{
      clearActiveClasses()
      item.classList.add('active')
    })
  )

  function clearActiveClasses(){
    slides.forEach(item=>item.classList.remove('active'))
  }
}

chooseImage(1)
