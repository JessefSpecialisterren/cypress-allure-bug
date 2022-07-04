/// <reference types="cypress" />
describe('cypress-allure-plugin marks tests as failed that didn\'t fail', () => {
  let counter = 0

  beforeEach(() => {
    counter++
    if (counter === 2 || counter >= 6) throw new Error('Fail test B once and test E always')
  })

  it('A', () => {})
  it('B', () => {})
  it('C', () => {})
  it('D', () => {})
  it('E', () => {})
})
