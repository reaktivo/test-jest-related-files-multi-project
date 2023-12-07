const Header = require('@test/header')

module.exports = function Button(props) {
  return `<button>${Header({text: props.text})}</button>`
}
