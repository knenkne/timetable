import './assets/scss/index.scss'

const roomTable = document.querySelector('.room-table')

document.querySelector('.site').addEventListener('scroll', () => {
  roomTable.classList.toggle('room-table--float', document.querySelector('.site').scrollLeft + 1 >= roomTable.getBoundingClientRect().width)
})
