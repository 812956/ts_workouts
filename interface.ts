interface Book {
     readonly id:number;
     title:string;
     author:string;
     publishedYear:number;
     email?:string
}

const aadujeevitham:Book ={
    id:1,
    title :'benyamin',
    author:'benaymin',
    publishedYear:1234
}

interface Person {
    name : string;
    age:number
}

interface Student extends Person {
   grad: string 
}

const juanid:Student = {
     name:'junaid',
     age:19,
     grad:'A'
}

// hybrid interface

interface Counter {

    (start:number):string;
    interval:number;
    reset():void

}


// function getCounter ():Counter{
    
    let counter = (function (start:number) {
        //  console.log('this is the fucntion for counter')
        return `this is the starting poing ${start}`
    })as Counter

    counter.interval = 500 
    counter.reset = ()=> {
        console.log('Counter reset');
    }
    // return counter
// }


// let counter1 = getCounter()
// console.log(counter1)
// console.log('hello',counter1(0))
// counter1.reset()


console.log(counter(5))
console.log(counter.interval)

interface Vehicle {
    model:number;

}
interface Car extends Vehicle {
    name:String
}

interface Product extends Car {
    compamy:string
}

let honadaAmez : Product = {
    model:323423,
    name:'junaid',
    compamy:'honda'
}



// last queestion

interface SmartDevise {

    brand:string;
    model:string;
    powerOn?:()=> string

}

interface Phone  extends SmartDevise{
    call:(number:string)=>  void;

}

interface Laptop extends SmartDevise{
    compileCode(language:string):string 
}


interface DeviceCounter {
    ():void;
    counterValue:number;
    incrementCounter():void
}

class Myphone implements Phone {
    
     brand: string;
     model:string;

     constructor(brand:string,model:string) {
        this.brand = brand;
        this.model = model
     }

     powerOn():string {
        return  'your phone swiched on'
     }

     call(number:string) {
      console.log(`the pohne is calling on this numer ${number}`)
     } 
}


class Mylaptop implements Laptop {
    brand:string;
    model:string;

    constructor (brand:string,modal:string) {
        this.brand = brand;
        this.model = modal
    }

    powerOn ():string {
        return 'lap top is switched on'
    }
    
    compileCode(language:string):string {
        return `the laptop is compiling the language ${language}`
    }

}



function getDeviceCounter():DeviceCounter{

    let diviceCouter = (function(){}) as DeviceCounter
      
     diviceCouter.counterValue = 0
     diviceCouter.incrementCounter =()=> {
     
       diviceCouter.counterValue+=1
     }

     return diviceCouter
}


let pohne1 = new Myphone('samsung','folding')
let myDevicecounter = getDeviceCounter()
myDevicecounter.incrementCounter()
let laptop1 = new  Mylaptop('apple','pro')
myDevicecounter.incrementCounter()

console.log('this is my counter value',myDevicecounter.counterValue)



