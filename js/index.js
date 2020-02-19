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