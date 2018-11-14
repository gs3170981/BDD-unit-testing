function component() {
    var element = document.createElement('div')
    element.innerHTML = 'Hello World!'
    return element
}

document.body.appendChild(component())
// function add(a, b){
//     return a + b;
// }