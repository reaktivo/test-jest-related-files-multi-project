const Unrelated = require('.')

describe('Unrelated', () => {
  it('should render', () => {
    expect(Unrelated()).toContain('Unrelated')
  })
})