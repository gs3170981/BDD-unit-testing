import Top from 'components/top/index.js'
import Bottom from 'components/bottom/index.js'

export default class Test {
    constructor (props) {
        this.root = props
    }
    init () {
        this.root.el.appendChild(Top())
        this.root.el.appendChild(Bottom())
    }
}