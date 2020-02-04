import { translate } from './../src/translate.js'

describe('Translator', () => {
  test('should correctly return a number as a string when given a number', () => {
    expect(translate(34)).toEqual("34");
  })
  test('should add "way" to the end of a word that begins with a vowel', () => {
    expect(translate("anchor")).toEqual("anchorway");
  })
  test('should take starting consonants and move them to the end of the word and add "ay" if the word starts with a consonant', () => {
    expect(translate("char")).toEqual("archay");
  })
  test('should treat "y" as a consonant if it is at the beginning of the word', () => {
    expect(translate("yes")).toEqual("esyay");
  })
  test('should treat qu as consonants if they are at the beginning of the word', () => {
    expect(translate("queue")).toEqual("euequay");
  })
})