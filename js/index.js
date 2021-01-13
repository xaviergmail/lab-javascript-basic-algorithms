// Iteration 1: Names and Input
const hacker1 = "Xavier"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Life"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  )
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1.length} characters`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  )
}

// Iteration 3: Loops

const lorem =
  "Ut dolore ad veniam voluptate aliqua minim pariatur pariatur veniam eiusmod. Proident est quis officia tempor voluptate id id. Anim ad fugiat ea officia deserunt laboris sint anim consectetur nulla tempor. Magna incididunt nulla tempor esse labore. Lorem non voluptate do sint et minim tempor voluptate."

let words = 0
for (let i = 0; i < lorem.length; i++)
  if (lorem[i] === " " || lorem[i] === ".") words++

let numEt = 0
for (let i = 1; i < lorem.length; i++)
  if (lorem[i - 1] == "e" && lorem[i] == "t") numEt++

function isPalindrome(str) {
  str = str.replace(/[^\w]/, "").toLowerCase()
  const end = str.length - 1
  for (let i = 0; i < Math.floor(end / 2); i++)
    if (str[i] != str[end - i]) return false

  return true
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("amor roma"))
console.log(isPalindrome("Was it a car or a cat I saw"))
console.log(isPalindrome("No 'x' in Nixon"))
console.log(isPalindrome("race car"))
