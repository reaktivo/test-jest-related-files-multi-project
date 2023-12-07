const Button = require('.')

test('Button', () => {
  expect(Button({text: 'Hello'})).toBe('<button><h1>Hello</h1></button>')
})
