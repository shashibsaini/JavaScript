/*
//Question 1
//
let LenA = 25;
let LenB = 25;
let LenC = 35;

if ((LenA === LenB) && (LenB=== LenC))
{
    console.log("equilateral")
}
else if ((LenA === LenB) && (LenB != LenC) || (LenA != LenB) && (LenB === LenC) || (LenA != LenB) && (LenA === LenC))
{
    console.log("Isosceles")
}
else
{
    console.log("Scalene")
}


// Question 2

let Marks = 96;

switch (true)
{
    case (Marks >= 90 && Marks <= 100):
        console.log ('S Grade')
        break;

    case (Marks >= 80 && Marks < 90):
        console.log ('A Grade')
        break;

    case (Marks >= 70 && Marks < 80):
        console.log ('B Grade')
        break;

    case (Marks >= 60 && Marks < 70):
        console.log ('C Grade')
        break;

    case (Marks >= 50 && Marks < 60):
        console.log ('D Grade')
        break;
                                        
    case (Marks >= 40 && Marks < 50):
        console.log ('E Grade')
        break;

    case (Marks >= 0 && Marks < 40):
        console.log ('Student has failed');
        break;

    default:
        console.log ('Invalid Marks')
}

// Question 3

let Total = 0;

for(i=1; i < 1000; i++)
{
    if(i%3===0)
        Total = Total + i;
}

console.log(Total)

Total = 0

for(i=0; i < 1000; i++)
{
    if(i%5===0)
        Total = Total + i;
}

console.log(Total)

// Question 4

let a = 1;
let i = 0;
let fact = 1;

function FindPrime(start,end)
{
    for(let i = start; i < end; i++)
    {
        if (i>1)
        {
            a = 1;
            for (let j = 2; j <= i/2; ++j) 
            {
                if (i % j == 0) 
                {
                    a = 0;
                    break;
                }
            }
            if (a == 1)
            {
                fact = fact*i;
                console.log(fact + " " + i);
            }
        }

    }
    console.log(`Factorial of Prime Number between ${start} and ${end} is ${fact}`)
}

FindPrime(1,10)

*/