function fizzBuzz() {
  for (let i = 1; i <= 100; ++i) {
    const logFizz = i % 3 === 0;
    const logBuzz = i % 5 === 0;
    if (logFizz || logBuzz) {
      console.log(`${i}: ${logFizz ? 'Fizz' : ''}${logBuzz ? 'Buzz' : ''}`);
    }
  }
}

fizzBuzz();
