
let nHut = 87;
let nTop = 0;
let nMiddle = 0;
let nSide = 0;
let nBottom = 0;

for(let i=1; i <= nHut; i++)
{
    nTop += 2
    nMiddle += 1
    nBottom += 1
}

if(nHut >1)
    nSide = nHut+1
else
    nSide = 2

let result = nTop + nMiddle + nBottom + nSide

console.log(`Total ${result} matchstick is required!`)