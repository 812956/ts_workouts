// class Person {
//     name:string;
//     age:number;
//     constructor(name:string,age:number) {
//      this.name = name;
//      this.age = age
//     }

//     indroduce():string{
//         return 'hello world how are you'
//     }


// }


// class Employee extends Person{
    
//     position:string;

//     constructor(name:string,age:number,position:string) {
//         super(name,age)
//         this.position= position
//     }

// }

// let Employee1 = new Employee('junaid',18,'member')
// console.log(Employee1)


class Animal {
    makeSound():void{
      console.log('it would be any sound ')
    }
}

class Dog extends Animal {
    makeSound(): void {
        
    }
}


// Create a class called BankAccount that has:

// A balance field (initialized to 0).
// A method called deposit that accepts a number and adds it to the balance.
// A method called withdraw that subtracts a number from the balance but only if there are sufficient funds (no overdrawing allowed).
// A method called checkBalance that returns the current balance.
// Task: Write the class definition and implement the methods for deposit, withdraw, and checking balance.

class BankAccount {
    balance = 0

    deposite(money:number):void {
        this.balance +=money
    }

    withdraw(money:number):void {
        if(money<=this.balance){
            this.balance -=money
        }
        else {
            console.log('insufficiant balance')
        }
    }

    checkBalance():void {
        console.log(`here is your bank balance ${this.balance}`)
    }
}

let junaidAccount = new BankAccount()
junaidAccount.deposite(1000)
console.log(junaidAccount.balance)
junaidAccount.withdraw(500)
junaidAccount.checkBalance()


// Create a class LibraryBook with the following fields:
// title (public)
// author (public)
// isbn (private)
// Add a method to print the book details, including the isbn.
// Attempt to access the isbn from outside the class and observe the error.
// Let me know once you've completed this, and we can proceed to the next topic.


class LibraryBook {
    public title : string;
    author:string;
    private isbn:boolean

    constructor(title:string,author:string,isbn:boolean){
        this.title = title,
        this.author = author,
        this.isbn = isbn
    }

    getBookDetails():void{
        console.log(`the book is ${this.title} written by ${this.author} and ${this.isbn}`)
    }
}

let Book1 = new LibraryBook('junaid','raman pilla',true)
console.log(Book1)
Book1.getBookDetails()


// Question:
// Create a base class called Person that has a protected field name. Then create a derived class called Student that extends Person. The Student class should be able to access and print the name field in a method called displayStudentInfo(). Try to access the name field from an instance of the Student class and observe what happens.

// Steps:

// Define a Person class with a protected name field.
// Extend it in a Student class and add a method displayStudentInfo() that prints the name.
// Try to access name outside of the Student class and observe any errors.


class Person {
    protected name:string;
    
    constructor(name:string) {
        this.name = name;
    }
}

class Student extends Person {
     
     constructor(name:string) {
        super(name)
     }

     DisplayStudentInfo():void {
        console.log('this is your name',this.name)
     }
}

let Person1 = new Student('junaid')
Person1.DisplayStudentInfo()



// static members in class

class Base {
    static great():string {
        return 'hellow world'
    }
}

class Dirived extends Base {
    static showGreeting ():void {
        console.log('',this.great())
    } 
}

Dirived.showGreeting()

class Counter {
    static count = 0
    static increament():void {
        this.count ++
    }

    static currentCount():number {
        console.log(this.count)
        return this.count
    }
}

Counter.increament()
Counter.currentCount()