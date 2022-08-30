/*
// ********************
// Question - 1
//*********************
//
let str = "";
let Count = 1;
let Rows = 5

for(let i = 1; i <= Rows; i++)
{
    for(let j = 1; j <=i; j++)
    {
        str += Count + " ";
        Count += 1;
    }
    console.log(str);
    str = "";
}
//
//
// ********************
// Question - 2
//*********************
//
let Amst1 = 372;
let prod = 1;
let Prod1 = 0;
let slice = 0;
let Amst = Amst1;

// for(let a = 100; a < 1000; a++) // To find armstrong number between to number
// {
//     Amst1 = a;
//     Amst = a;

    for(let i = 1; i <= Amst1.toString().length ; i++)
    {
        slice = (Amst%10);
        Amst = parseInt(Amst/10);

        for(let j=1; j <=Amst1.toString().length; j++)
            prod *= slice;

        Prod1 += prod;
        prod = 1;
    }
    if (Amst1 === Prod1)
        console.log(`${Amst1} is a Armstrong Number`)
    else    
        console.log(`${Amst1} is not a Armstrong Number`)
    Prod1 = 0;
// }
//
//
// ********************
// Question - 3
//*********************
//
let Num = 145;
let fact = 1;
let bal = 0;
let nNum = 0;
let nLen = Num.toString().length;
let nHold = Num;

for(i=1; i<=nLen; i++)
{
    bal = (Num%10)
    Num = parseInt(Num/10)
    fact = 1;

    for(let j = bal; j>0; j--)
    {
        fact *= j;
    }
    nNum += fact;
}

if(nHold === nNum)
    console.log(`${nHold} is a Special Number`)
else
    console.log(`${nHold} is not a Special Number`)


*/