import Top from '../../src/top/index.js'
import Bottom from '../../src/bottom/index.js'

describe('Top function unit test', function () {
    it('Top.innerHTML = Hello Top!', function () {
        let dom = Top()
        expect(dom.innerHTML).to.equal('Hello Top!')
    })
    it('Bottom.innerHTML = Hello Bottom!', function () {
        let dom = Bottom()
        expect(dom.innerHTML).to.equal('Hello Bottom!')
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
