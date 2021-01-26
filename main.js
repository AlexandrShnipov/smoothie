let burger_menu = document.getElementById('burger_menu')

function burgerMenu() {

  let burger_icon = document.querySelector('.burger_icon')
  let close_icon = document.getElementById('close_icon')

  burger_icon.addEventListener('click', toggleBurgerMenu)

  close_icon.addEventListener('click', toggleBurgerMenu)
}

function toggleBurgerMenu() {
  burger_menu.classList.toggle('burger_menu_active')
}

burgerMenu()


// работает

let buy_buttons = document.querySelectorAll('.products__btn')
console.log(buy_buttons)
let cart_count = document.getElementById('cart_count')

function addToCard() {
  cart_count.innerText = Number(cart_count.innerText) + 1
}

for (let i = 0; i < buy_buttons.length; i++) {
  buy_buttons[i].addEventListener('click', addToCard)
}

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