import Top from 'components/top/index.js'

describe(`Top`, function () {
    var dom = Top()
    it('Top.id === top',function () {
        expect(dom.id).to.equal('top')
    })
})