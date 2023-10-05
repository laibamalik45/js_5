//  chapter no 21
// q no 1
// var allLower = userInput.toLowerCase();
//  q no 2
// var x = "LAIBA";

// console.log(x.toLowerCase());
//  q no 3
// var y = "laiba";

// console.log(y.toUpperCase());
//   q no 7

// var cityName = "karachi";
// var firstChar = cityName.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = cityName.slice(1);
// otherChar = otherChar.toLowerCase();
// console.log(firstChar + otherChar);
// q no 6
// var city = "karachi"
// alert(city.toUpperCase());
//  q no 5
// var game = "HOCKEY";
// var play = game.toLowerCase();
// alert(play);

//  this is wrong ques sir bcz i can not understand
// var game = ["HOCKEY"];
// var play = game.toLowerCase();
// console.log(play);

// chapter no 26
// q no 1
// var num = 2.5;
// console.log(Math.round(num));
//  q no 2
// var origNum = 5.4;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);
// q no 3
// var origNum = 7.4;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);
//  q no 4
// var roundedNum = Math.floor(.5);
// console.log(roundedNum);



// chapter 22 to 25
//  q no 1
// var a = "captain";
// var char = a.slice(1,3);
// console.log(char);
//  q no 2
//  var a = "laiba";
//  var result = a.length;
//  console.log(result);
//  q no 3
// Animal = "elephant";
// var char = Animal.slice(2,6);
// console.log(char);
// q no 4
// var a = "captain";
// var char = a.slice(1,3);
// console.log(char);
//  q no 5
// var city = "karachi";
// var char = city.slice(0,1);
// var char2 = city.slice(4);
// var rsult = char + char2;
// console.log(rsult);
// q no 6
//  var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);

// q no 7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);


// q n0 8
// var para = "i go to school";
// var char = para.indexOf("go");
// console.log(char);

// q no 9
//  var name = "laiba";
//  if(name === "laiba"){
//     console.log("yes");
//  }

//  q no 10
// var char = "abcd";
// console.log(char.charAt(1,3))

// q no 11
// var name = "mynameislaiba";
// var char = name.charAt(10);
// console.log(char);

//  q no 12
// var name = "laiba";
// var char = name.charAt(4);
// console.log(char);

//  q no 13
// var name = "laibamalik";
// var char = name.charAt(5);
// console.log(char);
// q no 14

// var name = "laibamalik";
// var char = name.charAt(5);
// if(char === "m"){
//     console.log("yes");
// }


// q n0 15

// var text = ("ali says no");
// var numChar = text.length;
// for(var i = 0; i <=numChar; i++){
//     if(text.slice(i, i+2) === "no"){
//         alert("word found");
//         break;
//     }
// }

// q no 16
// var text = "1";
// var result = text.replace(1,"one");
// console.log(result); 

// q no 17
// var x =  " laiba";
// var y =  x.replace("a", "v");
// console.log(y);





// chapter no  27Q 1
// console.log(Math.random() * 50);
// Q 2
// var num = Math.random()*3;
// console.log(num);
// Q 3
// var user = prompt("enter");
// var run = Math.random() * 7 ;
// var floor = Math.floor(run);
// if(floor === 1){
//     console.log( user +"one");
// }
// else if(floor === 2){
//     console.log( user + "two");
// }
// else if(floor === 3){
//     console.log( user + "three");
// }
// else if(floor === 4){
//     console.log( user + "four");
// }
// else if(floor === 5){
//     console.log( user + "five");
// }
// else if(floor === 6){
//     console.log( user + "six");
// }

// Q 4
// var headuser = prompt("enter headuser");
// var tailuser = prompt("enter tailuser");
// var toss = Math.random()*2;
// var floor = Math.floor(toss);
// if(floor === 0)
// {
//     alert("head" + " " + headuser + "win the toss")
// }else{
//     alert("tail" + " "+ tailuser + "win the toss")
// }
// CHAPTER 28/29 CONVERTI NG STRING 
// Q 1
// var string = "9";
// console.log(Number(string));
// Q 2
// var str = "10";
// console.log(Number(str));
// Q 3
// var floatingstringnum = "2.341";
// console.log(Number(floatingstringnum));
// Q 4
// var num = "23577";
// var result =Number(num);
// console.log(result);
// console.log(typeof(result));
// Q 5
// var
// var num = 56;
// console.log(num.toString());
// Q6
// var value = 42;
// console.log(value.toString());
// Q 7
// var string = "3.14";
// var result = Number(string);
// console.log(result);
// CHAPTER 30 CONTROLLING TE LENGTH OF DECIMALS
// Q 1
// var num = 3.364356;
// var newNum = num.toFixed(4);
// console.log(newNum);
// Q 2
// var number = 3.346573;
// number = number.toFixed(2);
// number = Number(number);
// console.log(number);
// Q 3 skip 
// Q 4
// var number = 5.43856344469894;
// var result = number.toFixed(2);
// result = result.toString();
// console.log(result);

// var num = "123456789";
// var password = "";
// console.log(num.length);
// for(i=0;i<5;i++){
//     randomnum = Math.floor(Math.random() * num.length);
//     console.log(randomnum,num[randomnum]);
//     password += [num[randomnum]];

// }
// console.log(password);

