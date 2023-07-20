// fizzbuzz to 100

// to this snippet from fizzbuzz.js:
// // fizzbuzz

const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      return n;
    }
  }
};
