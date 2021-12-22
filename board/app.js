const board=document.querySelector('#board')
const listColor=document.querySelector('.list-color')
const colors=['red','blue','green','yellow','pink','white','purple']
const SQUARES_NUMBER=900
let currentColor='#fff'

for(let i=0;i<SQUARES_NUMBER;i++){
  const square=document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mousemove',()=>setColor(square,currentColor))
  
  board.append(square)
}

colors.forEach(color=>{
  const itemColor=document.createElement('div')
  itemColor.classList.add('item-color')
  itemColor.style.backgroundColor=`${color}`
  listColor.append(itemColor)

  itemColor.addEventListener('click',e=>currentColor=e.target.style.backgroundColor)
})

function setColor(el,color){
  el.style.backgroundColor=`${color}`
  if(color==='#fff'|| color==='rgb(255, 255, 255)'||color==='white'){
    el.style.boxShadow=`0 0 2px #1d1d1d, 0 0 10px ${color}`
  } else {
    el.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
  }
  
}

function print(e){
  console.log(e)
}
// function removeColor(el){
//   el.style.backgroundColor=`#fff`
//   el.style.boxShadow=`0 0 2px #1d1d1d`
// }

