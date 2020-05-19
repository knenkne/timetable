import './assets/scss/index.scss'

const roomTable = document.querySelector('.room-table')
const slots = document.querySelectorAll('.slot')

document.querySelector('.site').addEventListener('scroll', () => {
  roomTable.classList.toggle('room-table--float', document.querySelector('.site').scrollLeft + 1 >= roomTable.getBoundingClientRect().width)
})

const hideWidget = (slot) => {
  const widget = slot.querySelector('.slot-widget')

  if (widget) {
    widget.classList.add('hidden')
  }
}

slots.forEach((slot) => {
  const slotButton = slot.querySelector('.slot__button')
  const widget = slot.querySelector('.slot-widget')
  const editButton = widget ? widget.querySelector('.slot-widget__edit') : null

  slotButton.addEventListener('focus', () => {
    if (widget) {
      widget.classList.remove('hidden')
    }

    if (slot.nextElementSibling) {
      hideWidget(slot.nextElementSibling)
    }

    if (slot.previousElementSibling) {
      hideWidget(slot.previousElementSibling)
    }
  })

  slotButton.addEventListener('blur', (e) => {
    if (widget && e.relatedTarget !== editButton) {
      widget.classList.add('hidden')
    }
  })

  if (widget) {
    editButton.addEventListener('blur', (e) => {
      if (widget && e.relatedTarget !== widget.editButton) {
        widget.classList.add('hidden')
      }
    })
  }
})
