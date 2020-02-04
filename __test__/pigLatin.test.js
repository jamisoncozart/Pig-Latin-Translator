import { translate } from './../src/translate.js'

describe('Translator', () => {
  test('should correctly return a number as a string when given a number', () => {
    expect(translate(34)).toEqual("34");
  })
  test('should add "way" to the end of a word that begins with a vowel', () => {
    expect(translate("anchor")).toEqual("anchorway");
  })
})