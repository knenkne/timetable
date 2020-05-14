import './assets/scss/index.scss'

// const roomTable = document.querySelector('.room-table')

// document.querySelector('.site').addEventListener('scroll', () => {
//   roomTable.classList.toggle('room-table--float', document.querySelector('.site').scrollLeft >= roomTable.getBoundingClientRect().width)
// })

// document.addEventListener('touchmove', function (event) {
//   if (event.scale !== 1) { event.preventDefault() }
// }, { passive: false })

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// const vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`)

// We listen to the resize event
// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   const vh = window.innerHeight * 0.01
//   document.documentElement.style.setProperty('--vh', `${vh}px`)
// })

// function hscrollbar () {
//   /* First, we need the horizontal scroll position of the viewer's display,
//        but there are different ways to call it in JS depending on browser.
//        I'm using the if/else shorthand notation to detect if a call is legit:
//        somevar = (statement) ? statement_true_value : statement_false_value */
//   var left =
//         /* window.pageXOffset should work for most recent browsers: */
//         window.pageXOffset ? window.pageXOffset
//         /* If it DOESN'T, let's try this: */
//           : document.documentElement.scrollLeft ? document.documentElement.scrollLeft
//           /* And if THAT didn't work: */
//             : document.body.scrollLeft

//   /* Now that we have the horizontal scroll position, set #footpanel's left
//        position to NEGATIVE the value, so it APPEARS to follow the scroll: */
//   document.getElementById('footpanel').style.left = -left
// }
// window.onscroll = hscrollbar /* Call the function when the user scrolls */
// window.onresize = hscrollbar /* Call the function when the window resizes */
