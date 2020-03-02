import 'mocha'
import { expect } from 'chai'
import Share from '../'

describe("Share test", function () {
  it('Share is a function', function () {
    expect(Share).to.be.a('function')
  })
})