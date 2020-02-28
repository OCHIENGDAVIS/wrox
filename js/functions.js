console.log('Functions are here')
// eval('alert("hello world")') 
// function sayColor(){
//     alert(window.color)
// }
// window.sayColor()
console.log(Math.E)
console.log(Math.LN10)

let person = {
    name : 'Davis',
    age : 30, 
    job : 'Software Engineere',
    sayName : function(){
        console.log(this.name)
    }
}

console.log('The Factory pattern........')
function personCreator(name, age, job){
    o = new Object()
    o.name = name
    o.job = job
    o.age = age
    o.sayName = function(){
        return o.name
    }
    return o
}
let ochieng = personCreator('ochieng', 20, 'Coder')
console.log(ochieng)

console.log('THe constructor pattern.......')
function theConstructor(name, age, job){
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function(){
        return this.name
    }
}
davis = new theConstructor('Davis', 40, 'Security Engineer')
console.log(davis)

console.log('The Prototype pattern.......')
function Person(){}
Person.prototype.name = 'Davis'
Person.prototype.age = 30
Person.prototype.job = 'devops'
Person.prototype.sayName = function (){
    return this.name
}
let person1 = new Person()
console.log(person1.sayName())
console.log(person1.hasOwnProperty('name'))
console.log('This is the beginning w3shool js........')
function muFunc(){
    return this
}
console.log(muFunc())
let myObject = {
    firtName : 'Davis',
    lastName : 'Ochieng',
    fullName : function(){
        // return this.firtName + ' ' + this.lastName
        return this
    }
}
console.log(myObject.fullName())
let people = {
    fullName : function(city, country){
        return this.firstName + ' ' + this.lastName + ", " + city + " " + country
    }
}

let people1 = {
    firstName : 'JOB',
    lastName : 'Monk'

}
let person2 = {
    firstName : 'Mary',
    lastName : 'Gold'
}

console.log(people.fullName.apply(people1, ['Oslo', 'Norway']))
console.log(people.fullName.apply(person2, ['Nairobi', 'Kenya']))
console.log(Math.max.apply(null, [1,2,43]))
// initialize the counter
let counter = 0;
function increment(){
     counter +=1
}

// call add() 3 times
increment()
increment()
increment()
console.log(counter, 'Afet increasing....')
function add(){
    let counter = 0
    function plus(){
        counter +=1
    }
    plus()
    return counter
}
let p = document.getElementById('demo')
p.setAttribute('class', 'redd')
p.innerHTML = 'hello world'
let demo = document.getElementById('demo-btn')
demo.setAttribute('class', 'redd')
console.log(demo.hasAttribute('class'))
document.write(Date())
function randomClick(){
    let btn = document.getElementById('pipe').innerHTML = 'going a way!!'
}
function moreEvent(){
    let btn = document.getElementById('pipe').addEventListener('click', ()=>{
        this.innerHTML = 'Bye Bye'
    })
}
function lastEvent(){
    let btn  = document.getElementById('pipe')
    btn.addEventListener('click',function(){
        this.style.color = 'green'
    } )
}




