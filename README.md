# _Pig Latin Translator_

#### _Site to translate any sentence into Pig-Latin_, 23 January 2020

#### By _**Jamison Cozart & Kristina Hengster Tintor**_

## Description

_Pig-Latin translator which takes a user input sentence and translates all words in the sentence into Pig-Latin syntax. Uses string methods and array looping to translate the words._

_You can checkout the live page [here](https://jamisoncozart.github.io/Pig-Latin-Translator/)_

## Setup/Installation Requirements

1. Clone the repository into preferred directory:
    ```
    git clone https://github.com/jamisoncozart/Pig-Latin-Translator
    ```
2. Open working directory in Visual Studio Code or preferred text editor:
    ```
    code .
    ```
3. Open `index.html` in Chrome or preferred browser (some styles might change if not openned in chrome)

## Behavior Driven Development Specifications

| Behavior                                              | Input    | Output|
| ----------------------------------------------------- |:--------:| -----:|
| If user input is not a string                         | 34       |"34"|
| If user inputs a word starting with a vowel add "way" to the end of the word | "anchor" | "anchorway"|
| If user inputs a word starting with a consonant, move all starting consonants to the end and add "ay"      | "char"   | "archay" |
| If user inputs a word starting with a "y", treat it as a consonant        | "yes"  | "esyay"  |
| If user inputs a word starting with a "qu", move "qu" to the end and add "ay"   | "queue"    | "euequay"|
| If user inputs a word starting with a consonant followed by "qu", move all consonants and "qu" to the end and add "ay" | "squeal"    | "ealsquay" |
| If user inputs a word starting with no vowels add "ay" to the end of the word | "shy"    | "shyay" |

## Troubleshooting Node

https://github.com/nodejs/help/issues/1941

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery
* Git

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jamison Cozart & Kristina Hengster Tintor_**







