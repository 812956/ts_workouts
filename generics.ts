
// create an interface 

interface Result <T,U> {
    value:T;
    success:U;
}

let result1 :Result<string,boolean> = {
    value:'A',
    success:true
}

console.log(result1)


function hello<T> (data:T):T {
  
    return data
}

console.log(hello<string>('hello'))



function getLastElem<T>(arr:T[]):T {
    console.log(arr[arr.length-1])
  return arr[arr.length-1]
}


getLastElem<number>([1,2,3,4])


// Generic Array Reversal Write a generic function reverseArray<T> that takes an array of any type and returns the reversed version of that array.

function reverseArray<T>(arr:T[]):T[]{
    return arr.reverse()
}

console.log(reverseArray([12,3,4,5]))

// Generic Type Constraint Write a generic function getLength<T> that only accepts arrays or strings and returns their length. Use type constraints to ensure that only arrays and strings are allowed.


// 1. Basic Type Constraints (extends)
function returnLengthString<T extends {length:number}>(letter:T):number{

   console.log(typeof letter.length)
   return  10

}

returnLengthString<string>('hello')


// 2. Constraining with Union Types

function printId<T extends  {length:number} |number >(id:T):T {
     if(typeof id === 'string') {
      console.log(id.length)
     }
     else {
        console.log(id)
     }
    return id
}


printId<string>('junaid')
printId(1234)

