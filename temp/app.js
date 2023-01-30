
// let input1 = [12, 30, 44];


function meltu(input1) {
    
    for(let i=0;i<input1.length;i++)
   {
    let temp = (input1[i]*1.8) +32;
    let res = (temp-4)*10;
    input1[i] = res;
   }

   return input1
}

// console.log(meltu(input1))