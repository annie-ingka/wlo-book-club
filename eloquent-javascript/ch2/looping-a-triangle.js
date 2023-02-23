export default function loopingATriangle(size) {
  for (let i = 0; i < size; ++i) {
    console.log(Array(i + 2).join('#'));
  }
}

//loopingATriangle(7);
