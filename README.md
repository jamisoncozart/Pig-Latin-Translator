| Behavior                                              | Input    | Output|
| ----------------------------------------------------- |:--------:| -----:|
| If user input is not a string                         | 34       |"error"|
| If user inputs a word starting with a vowel add "way" to the end of the word | "anchor" | "anchorway"|
| If user inputs a word starting with a consonant, move all starting consonants to the end and add "ay"      | "char"   | "archay" |
| If user inputs a word starting with a "y", treat it as a consonant        | "yes"  | "esyay"  |
| If user inputs a word starting with a "qu", move "qu" to the end and add "ay"   | "queue"    | "euequay"|
| If user inputs a word starting with a consonant followed by "qu", move all consonants and "qu" to the end and add "ay"      | "squeal"    | "ealsquay" |