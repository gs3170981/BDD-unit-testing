import Bottom from 'components/bottom/index.js'

describe(`Bottom`, function () {
    var dom = Bottom()
    it('Bottom.id === bottom',function () {
        expect(dom.id).to.equal('bottom')
    })
})