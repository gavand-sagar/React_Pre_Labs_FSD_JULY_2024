
// function square(input){
//     return input * input
// }

// const square = (input) => {
//     return input * input
// }


// console.log(square(5))

// const addition = (a, b) => a + b;

// const divide = (a, b) => {
//     if (b == 0) {
//         return "NA"
//     } else {
//         return a / b
//     }
// }

// const square = x => x * x;

console.log('not inside the function', this)

let print = () => {
    console.log('inside the function', this)
}

print();


// this --> older react
// class based components 