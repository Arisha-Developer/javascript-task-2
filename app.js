//Chapter 31_34:
// var date = new Date();
// document.write(date);

// var date = new Date();
// var monthnames = ["January", "February", "March", "April", "May", "June",
//  "July", "August", "September", "October", "November", "December" ];
//  alert("Current month: "+monthnames[date.getMonth()])

// var date = new Date();
// var daynames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// alert("Today is: "+daynames[date.getDay()])


// var currentDate = new Date();
// currentDate.toString();
// var setDate =currentDate.toString();
// var newDate=setDate.slice(0,3)

// if (newDate == Sat){
//     alert("Its a fun Day")
// }
// else if(newDate == sun){
//     document.write("Its fun day")
// }


// var currentDate = new Date();
// var date = currentDate.getDate;
// if(date == 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15){
//     alert("First fifteen day of month")
// }
// else if(date == 16,17,18,19,20,21,22,23,24,25,26,27,28,29,30){
//     alert("Last day of month")
// }


// var date = new Date()
// var miliSec = date.getTime()
// var min = date.getMinutes()
// var diff = miliSec - min;
// var totDiff = diff/(1000*60*60)

// document.write("Current Date: "+date+"<br>")
// document.write("Elapsed milseconds since january 1970: "+miliSec+"<br>");
// document.write("Elapsed minutes since january 1,1970: "+totDiff)


// var date = new Date();
// var time = date.getTime();
 
// if(time == 1242){
//     alert("It's AM")
// }

// a = new Date(); 
// a.setFullYear(2020,11, 31);
// document.write("Later date: "+a);


//chapter 31 changing case


//  var userInfo = prompt("Enter your name:")
// userInfo.toUpperCase

// var userinput = prompt("What's your profession?")
// userinput.

// var phoneModel= prompt("What is your favorite mobile phone model:");
// document.write(phoneModel)

// var user = prompt("Type your favorite place:")
// var lastCharacter = user.charAt(user.length-1);
// console.log(lastCharacter)

// var country = "Pakistani"
// var character = country.charAt(7)
// document.write(character)


// var username = "Arisha Rehman"
// var userinput=prompt("Enter your username")

// if (userinput!==username||"@$"){
//     alert("Enter a valid username")
// }

// var sentence = "The quick brown fox jumps over a lazy dog"
// document.write(sentence.slice(0,3))

// var countName= "Pakistan"
// document.write(countName.charAt(2))

// var text = " Hyderabad "
// var newText = text . replace ( " Islam " , " Hyder " ) ;
// document.write(newText)

// var string = "and"
// var newString= string.replace("and","&")
// document.write(newString)

// var input=+prompt("Enter any positive integer")
// var roundOf=Math.round(input)
// console.log(roundOf)
// var floor=Math.floor(input)
// console.log(floor)
// var ceil = Math.ceil(input)
// console.log(ceil)

// var userinput=+prompt("Enter any negative integer")
// var round=Math.round(userinput)
// console.log(round)
// var floor = Math.floor(userinput)
// console.log(floor)
// var ceil= Math.ceil(userinput)
// console.log(ceil)

// var dice = Math.ceil(Math.random()*6)
// document.write(dice)

// var coin = Math.ceil(Math.random()*2)
// document.write(coin)

// var number = Math.random(1,2,3,4,5,6,7,8,9,10)
// var userInput = +prompt("Write any number between 1-10")
// if(userInput==Math.random()){
//     alert("Congratulation")
// }
// console.log(userInput)

// var age = prompt("Enter your age")
// var final = parseInt(age)
// console.log(final+1)

// var num = "432"
// var newNum=Number(num)
// var final = typeof(newNum)
// document.write(final)

// var num1 = 35.36
// var newnum=num1.toString();
// var finalNum = typeof(newnum)
// document.write(finalNum)
// console.log(num1)

// var percentage = 30/45*100;
// var newpercent = percentage.toFixed(2)
// document.write(newpercent)


//Chapter 35 - 38
// function currentDate(){
//     var nowDate= new Date();
//     document.write(nowDate)
// }
// currentDate()

// function greetings(){
//     var first=prompt("Enter your full name ")
// alert("Welcome"+first)
// }
// greetings()

// function favourites(){
//     var name=prompt("What's your name? ")
//     var movie = prompt("What's your religion? ")
//     var final = name+movie
//     console.log(final)
// }
// favourites()

function calculation(){
    var num1 = 20
    var num2 = 90
    var newnum=num1 * num2
    document.write(newnum)
}
calculation()






















