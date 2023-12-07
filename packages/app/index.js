const Button = require('@test/button')

module.exports = function App() {
  return `
    <div>
      ${Button({ text: 'Click me!' })}
    </div>
  `
}
