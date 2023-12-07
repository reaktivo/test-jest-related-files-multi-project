const App = require('.')

describe('App', () => {
  it('should render', () => {
    expect(App()).toContain('Click me!')
  })
})