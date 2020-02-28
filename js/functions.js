console.log('Functions are here')
// eval('alert("hello world")') 
function sayColor(){
    alert(window.color)
}
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