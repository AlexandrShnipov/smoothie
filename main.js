
// ! menu navigation

let navigation = document.getElementById('header__navigation')
let burgerBtn = document.querySelector('.header__burger-btn')

  
function headerNavigation() {

 
  burgerBtn.addEventListener('click', toggleMobileMenu)
 
}
headerNavigation()


function toggleMobileMenu() {
  console.log("open")
  navigation.classList.toggle('active');
  burgerBtn.classList.toggle('active');
 
}


function toggleBtn() {
  console.log('toggleBtn');
 }



// !cart count

let buy_buttons = document.querySelectorAll('.products__btn')
console.log(buy_buttons)
let cart_count = document.getElementById('cart__count')

function addToCard() {
  cart_count.innerText = Number(cart_count.innerText) + 1
}

for (let i = 0; i < buy_buttons.length; i++) {
  buy_buttons[i].addEventListener('click', addToCard)
}

// ! WOW

new WOW().init();



let anchors = document.querySelectorAll('a[href*="#"]')

// for (let i = 0; i < anchors.length; i++){
//   anchors[i]
// }

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    let blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: 'start'
    })
  })
}

// ! goTop

const goTop = document.querySelector('.go-top__link')
window.addEventListener('scroll', function (){
  if (window.scrollY > 0){
goTop.style.display = 'flex'
  }
  else {
    goTop.style.display = 'none'
  }
})