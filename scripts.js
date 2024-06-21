let prevButton = document.getElementById ('prev')
let nextButton = document. getElementById ('next')
let container = document.querySelector('.container')
let items= container.querySelectorAll('.list.item')
let  indicator = document.querySelector('indicators')
let dots= indicator.SelectorAll('ul li')
let list =container.querySelector('.list')


let active =0;
let firstPosition =0
let lastPosition = items.length-1



function setSlider(){

}

nextButton.onclick = ()=> {
    let dotsOld = indicator.querySelector( 'ul li.active')
    dotsOld.class.remove('active')
    dots [active].classList.add ('active')

   let itemOld = container.querySelector('list .item.active')
   itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? lastPosition : active - 1
    items[active].classList. add('active')

    
    indicator.querySelector('.number').innerHTML='0'+ (active +1)
}


nextButton.onclick =() => {
    active=active +1 > lastPosition ? 0 : active + 1
    setSlider()
        items[active].classList.add('active')
    
}

prevButton.onclick = ()=> {
    let itemOld = container.querySelector('list .item.active')
    itemOld.classList.remove('active')
 
     active = active - 1 > lastPosition ? lastPosition : active - 1
     setSlider()
     items[active].classList. add('active')
}


