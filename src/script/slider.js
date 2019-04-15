import "../style/main.stylus"
import "../style/slider.stylus"

const slide = document.getElementsByClassName("slide")
const itemLength = slide.length
console.log("length is "+itemLength);
// console.log(slide)
let displayId = 0
slider(displayId, slide)

for(let i = 0 ; i < slide.length ; i++){
  slide[i].addEventListener('animationend', callback)
  function callback(){
    displayId = i
    if(displayId == slide.length-1){
      displayId = 0
    }

    // console.log("displayId [" + displayId + "]でスライドします")
    slider(displayId, slide)
  }
}

function slider(step, item){
  let now = step
  let next = now + 1
  let slideItem = item
  const length = slideItem.length
  // const length = 9

  if(step == 8){
    next = 0
  }

  console.log("(now,next) is: (" + now + "," + next +")");
  for(let i = 0 ; i < length ; i ++){
    if(i != now || i!= next){
      slideItem[i].classList.remove("slideStandby")
      slideItem[i].classList.remove("slideItem")
      slideItem[i].classList.add("slideHide")
    }
  }
    console.log("out [" + now + "]をスライドアウトします")
    slideItem[now].classList.add("slideItem")
    slideItem[now].classList.remove("slideHide")
    slideItem[now].classList.remove("slideStandby")

    console.log("in [" + next + "]をスライドインします")
    slideItem[next].classList.add("slideStandby")
    slideItem[next].classList.remove("slideHide")
    slideItem[next].classList.remove("slideItem")
}

