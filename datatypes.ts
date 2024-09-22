
let userage : number = 20
let username : string = 'junaid chammayil'
let isAdmin : boolean = false
let salary : undefined = undefined
let otherDetils : null = null

function greeting(name:string): void {
    console.log(`hello this is ${name}`)
}

greeting('junaid')

let changingvaluenotRecomented : any = 5000
changingvaluenotRecomented = 'fathima'
changingvaluenotRecomented = undefined
changingvaluenotRecomented = null


// let useraddress:string
// console.log('this is user address',useraddress)

function sum (num1:number,num2:number) : number {
    
    return num1+num2
}

// union and litaral type
let userId : string | number |undefined

userId=1345
userId='jun54353254'
userId = undefined

userId =null  // this one will give error becuase not specified this type using pipe operator

let color : 'red' | 'blue' | 'green'
color =  'red'
color = 'blue'
color = 'green'

let age = 30 | 40 | 50
age = 30
age = 40
age = 50