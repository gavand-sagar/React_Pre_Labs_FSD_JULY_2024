// scope
//var first;//hoising
// console.log(first)
// var first = "this is the valeu"


// "var" variables are function-scoped 
// console.log(myValue)
// function something() {
//     if (2 > 3) {
//         var myValue = "Sagar";
//     }
//     console.log(myValue);
// }

// something()




// let variables are block scoped
function something() {
    let myValue = "Sagar";
    if (2 < 3) {        
        console.log(myValue);
    }
    console.log(myValue);
}

something()