// [1,2,3,4,5,6,7,8,9,10]の配列を偶数のみにする
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = arr.filter((num) => num % 2 === 0);
console.log(evenArr); // [2,4,6,8,10]

// [1,2,3,4,5,6,7,8,9,10]の配列を奇数のみにする
const oddArr = arr.filter((num) => num % 2 !== 0);
console.log(oddArr); // [1,3,5,7,9]

// 100までのカウントアップで、3の倍数の時にFizz、5の倍数の時にBuzz、3と5の倍数の時にFizzBuzzを表示する
// コメントアウトで説明して
for (let i = 1; i <= 100; i++) {
  // 1から100までのループ
  if (3 % i === 0 && 5 % i === 0) {
    // 3と5の倍数の時
    console.log("FizzBuzz"); // FizzBuzzを表示
  } else if (3 % i === 0) {
    // 3の倍数の時
    console.log("Fizz"); // Fizzを表示
  } else if (5 % i === 0) {
    // 5の倍数の時
    console.log("Buzz"); // Buzzを表示
  } else {
    // それ以外の時
    console.log(i); // iを表示
  } // if文の終わり
} // for文の終わり
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
