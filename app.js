const open = document.querySelector('.header-toggle')
const close = document.querySelector('.mobile-close')
const menu = document.querySelector('.mobile')
const activeClass = 'is-show'
open.addEventListener('click', function () {
  menu.classList.add(activeClass)
})
close.addEventListener('click', function () {
  menu.classList.remove(activeClass)
})
