export default function () {
    var a = 1
    var b = 1
    if ((a + b) > 2) {
      console.log('more than two')
    }
    var element = document.createElement('h1')
    element.id = 'bottom'
    element.innerHTML = 'Hello Bottom!'
    return element
}