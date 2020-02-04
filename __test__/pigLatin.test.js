import { translate } from './../src/translate.js'

describe('Translator', () => {
  test('should correctly return a number as a string when given a number', () => {
    expect(translate(34)).toEqual("34");
  })
})