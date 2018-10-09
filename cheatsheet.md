# Cheatsheet

## Types
* String: `"HELLO"`
* Number: `123`
* Array: `[1,2,3]`
* Boolean: `false
* Function: `() => {}`

## Log
```js
console.log('Hello')
```

## Create a variable
```js
let myAge = 22

let myName = 'Phil'

let numbersArray = [1,2,3]
```

## Create a function
```js
let sayHello = () => {
  console.log('hello')
}

let sayHelloToYou = (name) => {
  console.log('hello ' + name)
}
```
## Run a function
```js
sayHello()
```

or with parameters

```js
sayHelloToYou('Phil')
```

## Function Return values*
```js
let triple = (inputNumber) => {
  return inputNumber * 3
}

let tripleSix = triple(6)

console.log(tripleSix)
```

## Function Parameters*
```js
let addThreeNumbers = (first, second, third) => {
  console.log(first + second + third)
}
```

## Change a variable's value
```js
myAge = 123
```

## Maths
```js
console.log(myAge + 1)

console.log(12 + 3 * 2 / 4)
```

## Logic*
```js
console.log (100 > 10) // true
console.log(myName === 'Phil') // true
console.log(myAge === 55) // false

console.log(true && true) // true
console.log(true && false) // false

console.log(false || true) // true
console.log(false || false) // false
```

## Turn a string into a number*
```js
let myAgeNumber = Number("55")
```

## Turn a number into a string*
```js
let myAgeString = String(55)
```

## Joining Strings (Concatenate)
```js
console.log('Hello ' + myName)
```

## If Statements
```js
if (age > 100) {
  console.log('You are very old 🧟‍')
}
```

## If Else Statements
```js
if (age < 10) {
  console.log('you are very young')
} else {
  console.log('you are older than 10')
}
```

## Else If
```js
if (age < 12) {
  console.log('you are very young')
} else if (age < 20) {
  console.log('you are a teenager')
} else if (age < 30) {
  console.log('you are in your twenties')
} else {
  console.log('you are over 30')
}
```


## Get an element from the DOM (HTML)
```html
<div id="my-element">Hello</div>
```

```js
let myElement = document.getElementById('my-element')
```

## Get text from inside an element*
```js
let message = myElement.textContent
```

## Set text inside an element (deletes what was there before)*
```js
myElement.textContent = 'WOW 💩💩💩'
```

## Run a function when you click on an element
```js
myElement.onclick = () => {
  console.log('You clicked on me')
}
```

or

```js
myElement.addEventListener('click', () => {
  console.log('you clicked on me')
})
```

## Run a function when you press a key on the keyboard
```js
window.addEventListener('keydown', () => {
  console.log('you pressed a key')
});
```

## Get an element's ID*
```js
const id = myElement.id
```

## Get an elements classes*
```js
const classes = myElement.className
```

## Add a class to an element*
```js
myElement.classList.add('big')
```

## Remove a class from an element*
```js
myElement.classList.remove('big')
```

## Get click event element
```js
  myElement.onclick = (event) => {
    let clickedElement = event.target
    console.log(clickedElement.textContent)
  }
```