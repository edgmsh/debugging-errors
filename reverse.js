var input = process.argv[2];

if (input.length !== 0)
  console.log(reverse(input));

function reverse(original) {
  return original.split('').reverse().join("");
}