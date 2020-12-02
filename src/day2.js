// import { readToString } from './stdin.ts'

const foo = async () => {
  const input = await readToString().then(res => res
    .trim()
    .split('\n'))
  return input
}

// foo().then(console.log)

fetch('https://adventofcode.com/2020/day/2/input')
  .then(res => res.text())
  .then(text => {
    console.log(text);
  })
  .catch(err => console.log(err));