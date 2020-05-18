import './assets/scss/index.scss'

const roomTable = document.querySelector('.room-table')
const slots = document.querySelectorAll('.slot--reserved .slot__button')

document.querySelector('.site').addEventListener('scroll', () => {
  roomTable.classList.toggle('room-table--float', document.querySelector('.site').scrollLeft + 1 >= roomTable.getBoundingClientRect().width)
})

for (const slot of slots) {
  const widget = slot.nextElementSibling
  const editButton = widget.querySelector('.slot-widget__edit')

  slot.addEventListener('focus', () => widget.classList.remove('hidden'))
  editButton.addEventListener('blur', () => widget.classList.add('hidden'))
}
