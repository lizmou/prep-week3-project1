/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/
// *three steps to setting up and getting your data into the dom*
//1. add an event listener to a button or other element 
// 2. invoke your function to create your data transformation 
// 3. attach the information you want to the document’s inner text

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create a function that simply returns a string that says something funny 
//    when it is called and then displayed into the HTML page.

function somethingFunny(){
document.getElementById("q1").innerHTML = "I cant get no satisfaction...dododo.";	
};

somethingFunny();

// 2. Define a function called "divideByTwo". 
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked. 
//    The function should divide the number by two and 
//    then displayed into the HTML page.

function divideByTwo (number){
	return number/2;	
}

document.getElementById("q2").addEventListener("click", function(){
var temp = document.getElementById("input-number").value; //here 8 is a string-->"8"
//taking the variable "temp" and changing it into a number
temp = Number(temp); //here 8 is now a number
// divideByTwo(temp)here the number is 4
document.getElementById("result").innerHTML = divideByTwo(temp);
});



// 3. Define a function called "greeting". 
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.

function greeting(first1, first2){
//the key of first1 will be set to the value of name1, aka var first1 = the first thing passed in
//parameters and arguments: parameters are used in defining the function and arguments are used in invoking the function
//parameters become the keys or variables (that's why we can pass in ANY parameter) and the arguments become the value
	return "hi, " + first1 + " and " + first2;
}
document.getElementById("button").addEventListener("click", function(){
var name1=document.getElementById("name1").value;
var name2=document.getElementById("name2").value;
document.getElementById("q3").innerHTML = greeting(name1, name2);
});


// 4. Create a function that finds the average of 6 numbers passed in when called 
//    and returns the value and is then displayed in the HTML page.

function average(number1,number2,number3,number4,number5,number6){
	return (number1 + number2 + number3 + number4 + number5 + number6)/6;
}
document.getElementById("q4").innerHTML = average (1,2,3,4,5,6);

// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price. 

function priceCashew (price){
	return price*6;
}	
document.getElementById("my-button").addEventListener("click", function(){
var input=document.getElementById('price').value;
document.getElementById("q5").innerHTML = priceCashew (input);	
})

// document.getElementById("q5").addEventListener("keypress", function(event){
	// 	if (event.keyCode ===13){
	// 		alert("yes");
	// 	}				
	// })
	
// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area(length, width){ 	
 	return Number(length) * Number(width);
}

function perimeter(length, width){
	return 2*(Number(length) + Number(width));
}

document.getElementById("a-button").addEventListener("click", function(){
var length=document.getElementById("length").value;
var width=document.getElementById("width").value;
var areaTotal=area(length, width);
var perimeterTotal=perimeter(length, width);
document.getElementById("q6a").innerHTML = areaTotal;
document.getElementById("q6b").innerHTML = perimeterTotal;
});

//**target -->inputs
//**result --> elements
//**button --> with listener

// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
function quarter(number){
return Number(number)/4;
}

document.getElementById("q7").innerHTML = quarter (50);


// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours){

	if(Number(hours)>8){
		document.getElementById("q8a").innerHTML = "You got " + hours + " hours of sleep! You got enough sleep";
	}else {
		document.getElementById("q8b").innerHTML = "You only got " + hours + " hours of sleep! You need more shut eye.";
	}
};

sleepings(6);


// 9. Develop a function that determines a person's age by asking them for their birth year.

function birthYear(year){
 return 2016 - year;
}

	document.getElementById("year-button").addEventListener("click", function(){
	var myBirthYear=document.getElementById("year").value;
	document.getElementById("q9").innerHTML = birthYear(myBirthYear);
})


// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page. 
//    No names next to each other in the array should be on the same team.
teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
function splitArray (array){
	var a = [];
	var b = [];
	for(var i=0; i<array.length; i++){
		if(i%2===0){
			a.push(array[i]);
		}else{
			b.push(array[i]);
		}
	}
	return [a,b];
}
// we want to save splitArray in a variable not just invoke it
var x = splitArray(teammates);

document.getElementById("first").innerHTML = "the first array is " + x[0];
document.getElementById("second").innerHTML = "the second array is " + x[1];


// 11. Allow a user to enter a three digit number. 
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.

//name your parameters something easy to follow
function digits(numberToString){		
		
//split up the number
	var splitArray = numberToString.split("");//(1,2,3)
	console.log(splitArray);
	return splitArray;
}

document.getElementById("digits-button").addEventListener("click", function(){
//declare your array at the top of it's scope for best practice.
var array= [];
var digitsValue= document.getElementById("digits").value;
//turn nums into array strings
var arrayOfNumStrings = digits(digitsValue);
//turn the strings to nums and add them.  The parseInt() function parses a string and returns an integer. 
var sum = parseInt(arrayOfNumStrings[0]) + parseInt(arrayOfNumStrings[1]) + parseInt(arrayOfNumStrings[2]);
document.getElementById("q11").innerHTML = sum;
});


// Take digitsvalue and pass into function that does everything else

// 12. You've finally gotten around to counting the change in your piggy bank. 
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

function piggy(q, d, n, p){
//for each of these, let's get their indivicual value
var quarters = q * 25;
var dimes = d * 10;
var nickels = n * 5;
var pennies = p;
var total = (quarters + dimes + nickels + parseInt(pennies))/100;
//we want to make total a string so that we can concatenate it to the dollar sign

var total = "$" + total.toFixed(2);

return total;
}
// return total;

//make 4 inputs and 1 output
document.getElementById("piggy-button").addEventListener("click", function(){
	var myQuarters=document.getElementById("quarters").value;
	var myDimes=document.getElementById("dimes").value;
	var myNickels=document.getElementById("nickels").value;
	var myPennies=document.getElementById("pennies").value;

	document.getElementById("piggy-total").innerHTML = piggy(myQuarters, myDimes, myNickels, myPennies);

});

//***Below is a way to hit a submit on an input by pressing enter, using question 12 above
// document.addEventListener("keydown", function(event){
// 	console.log(event.keyCode);
// 	if(event.keyCode ===13){
// document.getElementById("quarters").innerHTML = 
// 	}
// }


// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.



// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]



// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.   
//     To get the random number rolled by each die, use Math.random and Math.floor.



// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



// E. Write a function that takes a year from a user 
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.



//*in class practice, going over accumulator patterns (class 1), map() and reduce().


//exercise: take the input below and double each number, then return the output
// input= [1,2,3]
// ouput = [2,4,6]


//create a function 
function input(anyInput){
	var newArray = [];	//create an empty array which is the container that will hold your output
	for (var i=0; i<anyInput.length; i++){
		console.log(anyInput[i]);
		newArray.push(anyInput[i] * 2);		
	}
	return newArray;
}

var array = [5,6,7,8];
input(array);

// ########################################################################
//map creates a function for each element -  creates its own function scope
var array = [1,2,3];
var newArray = array.map(function(eachThingInTheArray){
	return eachThingInTheArray * 2;
});

var array = [1,2,3,4,5,6];
var newArray = array.reduce(function(previousThingInTheArray, nextThingInTheArray){
	return previousThingInTheArray + "batman" + nextThingInTheArray;
},0);





