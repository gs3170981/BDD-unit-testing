import Top from './top/index.js'
import Bottom from './bottom/index.js'

export default class Test {
    constructor (props) {
        this.root = props
    }
    init () {
        this.root.el.appendChild(Top())
        this.root.el.appendChild(Bottom())
    }
}