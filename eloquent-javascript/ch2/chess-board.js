function chessBoard(size) {
  let str = '';
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      if (i % 2 === 0) {
        str += j % 2 === 0 ? ' ' : '#';
      } else {
        str += j % 2 === 0 ? '#' : ' ';
      }
    }
    str += '\n';
  }
  return str;
}

console.log(chessBoard(8));
