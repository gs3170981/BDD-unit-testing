import Test from 'components/index.js'

describe(`Test`, function () {
    const DOM = new Test({
        el: document.body
    })
    DOM.init()
    it('#top node is',function () {
        expect(typeof document.getElementById('top')).to.equal('object')
    })
    it('#bottom node is',function () {
        expect(typeof document.getElementById('bottom')).to.equal('object')
    })
})
// describe('add function unit test.', function(){
//     it('2 + 3 = 5', function(){
//         var result  = add( 2, 3 );
//         expect(result).to.equal(5)
//     });
  
//     it('2 + 3 = 6, this should faild.', function(){
//         var result = add( 2, 3 );
//         expect(result).to.equal(6)
//     })
// });
