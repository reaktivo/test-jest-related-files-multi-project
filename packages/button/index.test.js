const Button = require('.')

test('Button', () => {
  expect(Button({ text: 'Hello' })).toContain('Hello')
})
