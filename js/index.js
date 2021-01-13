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
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1.length} characters`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  )
}

// Iteration 3: Loops
let build = ""
for (let i = 0; i < hacker1.length; i++) {
  build += hacker1[i].toUpperCase()
  if (i < hacker1.length - 1) build += " "
}
console.log(build)

build = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
  build += hacker1[i]
}
console.log(build)

if (hacker1 > hacker2) {
  console.log("The driver goes first")
} else if (hacker2 > hacker1) {
} else {
}

const lorem =
  "Ut dolore ad veniam voluptate aliqua minim pariatur pariatur veniam eiusmod. Proident est quis officia tempor voluptate id id. Anim ad fugiat ea officia deserunt laboris sint anim consectetur nulla tempor. Magna incididunt nulla tempor esse labore. Lorem non voluptate do sint et minim tempor voluptate."

let words = 0
for (let i = 0; i < lorem.length; i++)
  if (lorem[i] === " " || lorem[i] === ".") words++

let numEt = 0
for (let i = 1; i < lorem.length; i++)
  if (lorem[i - 1] == "e" && lorem[i] == "t") numEt++

function isPalindrome(str) {
  str = str.replace(/[^\w]/g, "").toLowerCase()
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
