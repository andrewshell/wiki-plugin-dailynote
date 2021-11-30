// build time tests for dailynote plugin
// see http://mochajs.org/

(function() {
  const dailynote = require('../client/dailynote'),
        expect = require('expect.js')

  describe('dailynote plugin', () => {
    describe('expand', () => {
      it('can make itallic', () => {
        var result = dailynote.expand('hello *world*')
        return expect(result).to.be('hello <i>world</i>')
      })
    })
  })

}).call(this)
