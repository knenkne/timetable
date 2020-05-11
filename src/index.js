import './assets/scss/index.scss'

const roomTable = document.querySelector('.room-table')

document.addEventListener('scroll', () => {
  roomTable.classList.toggle('room-table--float', document.documentElement.scrollLeft + 1 >= roomTable.getBoundingClientRect().width)
})
