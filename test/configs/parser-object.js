test('Parser as an object', () => {
  const css = require('../fixtures/style.sss')
  expect(css).toEqual('a {\n  color: black\n}\n')
})
