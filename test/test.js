var assert = require('assert')

describe('util', function () {
  var util = require('../util')
  describe('sanitizeString', function () {
    it('should escape unicode Emoji', function () {
      assert.equal(util.sanitizeString('🐔™ and numbers: 123'), ':chicken:™ and numbers: 123')
    })
    it('should remove ANSI escape sequences', function () {
      assert.equal(util.sanitizeString('\u001b[32mHello, world!\u001b[39m'), 'Hello, world!')
    })
    it('should keep newline but remove carriage return', function () {
        assert.equal(util.sanitizeString('hello\r\nworld'), 'hello\nworld')
      })
  })
})
