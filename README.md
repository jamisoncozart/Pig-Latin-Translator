| Behavior                                              | Input    | Output|
| ----------------------------------------------------- |:--------:| -----:|
| If user input is NaN                                  | "hello"  | false |
| If user input is a float                              | "2004.3" | false |
| A year is not a leap year if it is not divisible by 4 | 1993     | false |
| A year is a leap year if it is divisible by 4         | 2004     | true  |
| A year is not a leap year if it is divisible by 100   | 1900     | false |
| A year is a leap year if it is divisible by 400       | 2000     | true  |