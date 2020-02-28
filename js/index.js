// // Print Table of 5 using for loop
// // Print the first five een bumbers

// const five = (num)=>{
//     let result  = document.getElementById('result')
//     for(let i =1; i <= num; i++ ){
//         document.write("<h1>" + num * i +"</h1>")
//     }
// }

// // five(5)

// const evenPrinter = (num)=>{
//     for(let i =1; i <= num; i++ ){
//         if(i % 2 === 0){
//             document.write("<h1>" + i +"</h1>")
//         }
        
//     }
// }

// // evenPrinter(100)

// const whilLoop = ()=>{
//     let num = 10
//     while(num >= 1){
//         console.log(num)
//         num--
//     }
// }
// // whilLoop()/
// const doWhileLoop = ()=>{
//     let num = 0
//     do{
//         console.log('This is the do while loop')
//         num++

//     }while(num< 10)
// }

// // doWhileLoop()

// const add = (a, b)=>{
//     return a+ b
// }

// document.write("<h1>Funtions are in the air Kidoo</h1>")
// document.write(add(2,4))
// console.log(typeof add)

// document.write('<h1>Arrays in the air</h1>')

// let cars  = ['BMW', 'Volvo', 'Audi']
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }
// const Car = {
//     brand: 'Tesla',
//     model : 's3',
//     price : '300,000000',
//     autoPilot : ()=>{
//         console.log('This is the autopilot baby!!')
//     },
//     revserse : ()=>{
//         console.log('Reversing baby!!')
//     }
// }

const btnClick = ()=>{
    let displayDiv = document.getElementById('info')
    displayDiv.innerHTML = 'The real thing has began'
    displayDiv.style.color = 'rgb(155, 100, 255)'
    displayDiv.style.fontSize = '40px'
    let display = document.getElementById('result')
    displayDiv.style.backgroundColor = 'green'
    displayDiv.style.padding = "30px"
}

const clicked = ()=>{
    console.log("Clicked me tooo");
}
const handleName = ()=>{
   let name =  document.getElementById('text1').value
   let password =  document.getElementById('password').value
   if (name === '' || password === ''){
       alert('Name or password can not be empty')
       let textInput = document.getElementById('text1')
       textInput.style.backgroundColor = 'red'
       let passwordInput = document.getElementById('password')
       passwordInput.style.backgroundColor = 'red'
   }
   else{
        alert(`Your username is ${name} and your password is ${password}`)
   }
    

}
const handleLanguage = ()=>{
    let js = document.getElementById('js')
    let python = document.getElementById('python')
    if (js.checked){
        alert(js.value)
    }
    else if (python.checked){
        alert(python.value)
    }
    else{
        alert('Make a choice!!')
    }
    

}
const handleUni = ()=>{
    let univeristy = document.getElementById('university')
    alert(university.options[univeristy.selectedIndex].value)
}
const handleStyle = ()=>{
    let para = document.getElementsByTagName("p")
    for(let i=0; i< para.length; i++){
        para[i].style.color = 'blue'
        para[i].style.fontSize = '30px'
    }
    let green = document.getElementsByClassName('green')
    for(let i= 0; i<green.length; i++){
        green[i].style.color = 'green'
    }
}

const handleImage = ()=>{
    let img = document.getElementById('image').src = 'img/css3-1841590_640.png'
}
const setOldImage = ()=>{
    let img = document.getElementById('image').src = 'img/laptop-2838914_1920.jpg'
}

const validateForm = ()=>{
    let email = document.getElementById('email').value
    let password = document.getElementById('pass').value
    if(email.trim() === ''){
        document.getElementsByClassName('errorMessage')[0].style.display = 'block'
    }
    else if(password.trim() === ''){
        document.getElementsByClassName('errorMessage')[1].style.display = 'block'
    }
    else{
        alert('calling the login script.....')
    }
}

const handleRegular = ()=>{
    let uname = document.getElementById('uname').value
    let regex = /^abc$/
    if(regex.test(uname)){
        document.getElementById('valid').style.display = 'block'
    }
    else{
        document.getElementById('invalid').style.display = 'block'
    }
}
let ID = 0
const printMsg = ()=>{
   let text = document.getElementById('some-text')
   text.innerHTML = '5 Seconds have past'
   text.style.color = 'red'

}
const handleStart = ()=>{
    ID = setTimeout(printMsg, 5000)
}
const handleEnd = ()=>{
    clearTimeout(ID)
}

changeBlackColor = ()=>{
    document.getElementById('some-text').style.color = 'black'
    setInterval(changeGreenColor, 100)
}
changeGreenColor = ()=>{
    document.getElementById('some-text').style.color = 'green'
    
}
const starter = ()=>[
    changeBlackColor()
]
const animate = ()=>{
    setInterval(starter, 100)
}
function sayHi(name, message){
    console.log(arguments)
    return 'Hi ' + name + ', ' + message
}
const sayThanks = ()=>{
    console.log(arguments)
    return 'thankyou'
}




function displayInfo(){
    //code will go here
}
let obj = {}

let array = new Array('red', 'green', 'yellow', 'white', 'purple', 'gray', 'rgb')
console.log(array.length)
if (array instanceof Array){
    console.log("An array was found")
}
else{
    console.log('Nothinf resembling an array has been found in the site')
}
if(Array.isArray(array)){
    console.log("an Array has been founf in the app")
}
else{
    console.log('Nothing like an array has been seen her ')
}
console.log(array.toString())
console.log(obj.toString())  
console.log(array.valueOf() + ' From the array')

console.log(array.join(' | '))
obj.name = 'ochieng'
obj.lname = 'ogori'
obj.mname = 'ondoro'
let values = [0, 1, 5, 10, 15]
function compare(value1, value2){
    if(value1 < value2){
        return -1
    }
    else if(value2 < value1){
        return 1
    }
    else{
        return 0
    }
}
console.log(values.sort(compare))   
let newValues = values.concat('one', 'two', 'three', 'four', 'five')
console.log(newValues)
console.log(values)
console.log('Before splicing......')
console.log(values)
console.log(values.splice(1 , 1, 'red', 'green'))
console.log('After splicing tha array....')
console.log(array) 
console.log(array.indexOf('purple'))
console.log(array.lastIndexOf('purple'))

console.log('Dealing with the every() array method.....')

let numbers = [1,2,3,4,5,6,7,8,9,10]
let divisible = numbers.every((item)=>{
    return item % 2 === 0 
})
console.log(divisible)
console.log('Dealing with the some() array method.....')
let someDivisible = numbers.some((item)=>{
    return item % 2 === 0
})
console.log(someDivisible)

console.log('Dealing with filter() array method.....')
let filterDivisible = numbers.filter((item)=>{
    return item % 2 == 0
})
console.log(filterDivisible)
console.log('Dealing with the map() array method......')

let mapDivisible = numbers.map(function(item){
    return item **2
})
console.log(mapDivisible)
console.log('Reduction array methods.....')
let sum = numbers.reduce(function(prev, current, index, array){
    console.log(index)
    console.log('First round')
    console.log(array)
    return prev + current
})
console.log(sum)
console.log('The manual sumManual() function ......')
function sumManual(arr){
    let result = 0
    arr.forEach((item)=>{
        return result += item
    })
    return result
}
console.log(sumManual(numbers))

console.log('Dealing with Dates in javascript.......')
let now = new Date()
console.log(now)

let someDate = new Date(Date.parse('May 25, 2004'))
console.log(someDate)
someDate = new Date(Date.UTC(2000, 2 ))
console.log(someDate.getMilliseconds())
let date1 = new Date(2007, 0, 1)
let date2 = new Date(2007, 1, 1)
console.log(date1 < date2)
console.log(date2 > date1)
console.log(date1.getTime())
console.log('before adding several milliseconds')
console.log(date1)
date1.setMilliseconds(122322232)
console.log('After adding several milliseconds')
console.log(date1)
console.log(date1.getFullYear())
console.log('Welcome to the world of regular Expressions......')
console.log('Welcome to the world of Functions Now......')


let pattern1 = new RegExp('/at/g')
let text = 'at the end is the beginning'
let anotherSum = function(num1, num2){
    return num1 + num2
};

console.log(anotherSum(2,4))
const sumAgain = anotherSum
console.log(sumAgain(4,8))
anotherSum = null
console.log(sumAgain(2,8))
function addNumber(num){
    return num + 100
}
function addNumber(num){
    return 200 + num
}
console.log(addNumber(100))
function callSomeFunction(someFunction, someArguments){
    return someFunction(someArguments)
}
function add(num1, num2){
    return num1 + num2
}
let response = callSomeFunction(addNumber, 12)
console.log(response)

let data = [
    {
        name : 'Davis',
        age : 25
    },
    {
        name : 'nicholas',
        age : 30
    }
]
function createComparisonFunctipn(propertyName){
    return function (obj1, obj2){
        let var1 = obj1[propertyName]
        let var2 = obj2[propertyName]
        if(var1 < var2){
            return -1
        }
        else if(var2 < var1){
            return 1
        }
        else{
            return 0
        }

    }
}
console.log(data.sort(createComparisonFunctipn('name'))[0])

function sub(num1, num2){
    return num1 - num2
}
function callSub(){
    return sum.apply(this, arguments)
}

console.log(sub.caller)