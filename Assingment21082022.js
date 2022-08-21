
// Assingment - 1
// Dated : 21/08/2022

// Question - 1


let yr = 2014;

if (yr%4 === 0)
{
console.log(`${yr} is a Leap Year`)
}
else
{
    console.log(`${yr} is not a Leap Year`)
}


// Question - 2

let tmpCels = 60;
let tmpFahr = 45;

let cFahr = (tmpCels*1.8)+32
console.log(`${tmpCels} Celsius is equal to ${cFahr} Fahrenheit`)

let cCels =  ((tmpFahr-32)*5)/9
console.log(`${tmpFahr} Fahrenheit is equal to ${cCels} Celsius`)


// Question - 3

let num = 4;
let fact = 1;

for(i=1; i<= num; i++) fact = fact * i;

console.log(`Factorila of ${num} is ${fact}`)   
