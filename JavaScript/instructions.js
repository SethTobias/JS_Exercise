//Answer make sure to answer all of the questions between the questions that follow

// The following exercise consists of DOM manipulation, variables, conditional statements, loops, arrays and objects Everything you have covered so far.
// The questions will vary with difficulty and you may be required to combine more than one topic to complete a certain exercise.
// ***You will not be allowed to use Youtube solutions if you are unable to explain your solutions that follow. After I check your answer and you cannot explain your code, I will mark it as a strike against your name.
// AIM: To complete the exercise fully without any assistance as much as possible.
// REMEMBER:   The feeling for anxiousness and excitement is that of a fine line...Physiologically they are almost identical.
//             The feeling you're feeling is excitement not nervousness. I know you got this! I believe in you even if you don't believe in yourself!:)

// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR
document.getElementById("heading").innerText = "Javascript";
/*
1 document selects the entirety of the HTML document
2 .getElementById then references the HTML element by the give ID value
3 .innerText then references the text within the given element
4 = "Javascript" then reassigns the value of the text within the heading element
*/

// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself'
document.querySelector(".paragraph").innerText =
  "This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself";
/*
1 document selects the entirety of the HTML document
2 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a class selector
3 .innerText then references the text within the given element
4 = 'This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself' then reassigns the value of the text within the heading element reassigns value of the text within the paragraph with the paragraph class name
*/

// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector
document.querySelector("h3").innerHTML = "Things I've accomplished so far";
/*
1 document selects the entirety of the HTML document
2 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a class selector
3 .innerText then references the text within the given element
4 = 'Things I\'ve accomplished so far' reassigns the value of the innerText of the h3 element
5 \ => used to allow certain characters to be displayed within a string. Only used when enclosing strings within ''s
6 One can also make use of "" to enclose the text within when wanting to make use of ' within a string
*/

// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index
document.getElementsByTagName("p")[1].innerHTML =
  "I have discovered that I can accomplish anything I put my mind to";
/* 
1 document selects the entirety of the HTML document
2 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a element selector combined with the use of indexing
3 .innerText then references the text within the given element
4 = 'I have discovered that I can accomplish anything I put my mind to' reassigns the value of the innerText of the second paragraph tag within the document
5 [] allows one to make reference to the indexing used to refer to to all the elements within the document
*/

// So far you have hints, however the hints have lessened.
// 5.1. Attach the first input to a variable
let firstInput = document.querySelector("[data-firstMultiply]").value;
/*
1 let is a keyword that allows us to both initialize and declare a variable
2 firstInput is the variable name
3 document selects the entirety of the HTML document
4 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a attribute selector
5 .value lets us retrieve the value stored within the input element
*/

// 5.2. Attach the second input to a variable
let secondInput = document.querySelector("[data-secondMultiply]").value;
/*
1 let is a keyword that allows us to both initialize and declare a variable
2 secondInput is the variable name
3 document selects the entirety of the HTML document
4 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a attribute selector
5 .value lets us retrieve the value stored within the input element
*/

// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)
let calculate1 = document.querySelector("[data-calculate1]");
/*
1 let is a keyword that allows us to both initialize and declare a variable
2 calculate1 is the variable name
3 document selects the entirety of the HTML document
4 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a attribute selector
*/

// 5.4. Attach the FIRST span element to a variable(To display the information to)
//P.S. for the next step make use of console.log() to keep track of where data is going
let output1 = document.querySelector("[data-first]").innerText;
/*
1 let is a keyword that allows us to both initialize and declare a variable
2 output1 is the variable name
3 document selects the entirety of the HTML document
4 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a attribute selector
5 .innerText allows the value of the span element to be displayed
*/

// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.
function multiplication() {
  let firstInput = document.querySelector("[data-firstMultiply]").value;
  let secondInput = document.querySelector("[data-secondMultiply]").value;
  answer = firstInput * secondInput;
  document.querySelector("[data-first]").innerText = answer;
}
/*
1 function is a keyword that allows us to start declaring function with in the function body in other words the {}
2 multiply is the function name which we will use to call the function when we want it to run 
3 the first two lines of the function body is where we call the declared variables
4 in the third line we temporarily store the product of the two variables
5 the fourth line of the function body we then alter the inner text displayed by reassigning the value with the value stored in answer
*/

// 5.6. Add an event listener to the button that runs the function that you created
calculate1.addEventListener("click", () => multiplication());
/*
1 calculate1 allows us to call up the specific button by referring to its variable name
2 .addEventListener waits for a certain input and once trigged the second statement will run
3 () => lets us anonymously call upon a certain function
4 multiplication () calls upon the function 
*/

// 5.7 Hmm......Did you forget to make your input tags return a value instead of the element? (0.0)
//     Or did you forget we are writing to an element not an input?....which means your answer will be displayed with innerText
// answered by including the innerText in the step above?
// Okay, that was pretty awesome...not too bad when you have the steps?

// 6. Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0
// 6.1 Set the first modulus input to a variable
let firstModulus = document.querySelector("[data-firstModulus]").value;
/*
1 let is a keyword that allows us to both initialize and declare a variable
2 firstModulus is the variable name
3 document selects the entirety of the HTML document
4 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a attribute selector
5 .value lets us retrieve the value stored within the input element
*/

// 6.2 Set the send modulud input to a variable
let secondModulus = document.querySelector("[data-secondModulus]").value;
/*
1 let is a keyword that allows us to both initialize and declare a variable
2 firstModulus is the variable name
3 document selects the entirety of the HTML document
4 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a attribute selector
5 .value lets us retrieve the value stored within the input element
*/
// 6.3 Set the SECOND span to a varable(will display answer)
let output2 = document.querySelector("[data-second]").innerText;
/*
1 let is a keyword that allows us to both initialize and declare a variable
2 output2 is the variable name
3 document selects the entirety of the HTML document
4 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was a attribute selector
*/

// 6.4 Set the SECOND button to a variable(to run event listener)
let calculate2 = document.querySelector("#calculate2");
/*
1 let is a keyword that allows us to both initialize and declare a variable
2 calculate2 is the variable name
3 document selects the entirety of the HTML document
4 .querySelector allows you to select any given element by making reference to a certain CSS selectors. In this case it was an id selector
5 .innerText allows the value of the span element to be displayed
*/

// 6.5 Create a normal function to calculate the modulus of the inputs

function modulus() {
  let firstModulus = document.querySelector("[data-firstModulus]").value;
  let secondModulus = document.querySelector("[data-secondModulus]").value;
  answer = firstModulus % secondModulus;
  document.querySelector("[data-second]").innerText = answer;
}
/*
1 calculate2 allows us to call up the specific button by referring to its variable name
2 .addEventListener waits for a certain input and once trigged the second statement will run
3 () => lets us anonymously call upon a certain function
4 modulus () calls upon the function 
*/

// 6.6 Add an event listener to the button which will run the function you created
calculate2.addEventListener("click", () => modulus());
/*
1 calculate2 allows us to call up the specific button by referring to its variable name
2 .addEventListener waits for a certain input and once trigged the second statement will run
3 () => lets us anonymously call upon a certain function
4 multiplication () calls upon the function 
*/

// Hmmm......That wasn't too bad....I knew you could do it! I believe in you.
// You should now have an idea of the steps neccesary to complete actions using DOM manipulation.

// Okay now that you are aware of the steps needed, try no 7
// 7.1 Change the text of 'Bubble Tea' to 'White Tea'
document.getElementsByTagName("li")[0].innerText = "White tea";
/* 
1 document selects the entirety of the HTML document
2 .getElementsByTagName allows you to select any given element by making reference to the name of tag combined with the use of indexing
3 .innerText then references the text within the given element
4 = "White tea" reassigns the value of the innerText of the second paragraph tag within the document
5 [] allows one to make reference to the indexing used to refer to to all the elements within the document
*/

// 7.2 Change the text of 'Green Tea' to 'Black tea'
document.getElementsByTagName("li")[2].innerText = "Black tea";
/* 
1 document selects the entirety of the HTML document
2 .getElementsByTagName allows you to select any given element by making reference to the name of tag combined with the use of indexing
3 .innerText then references the text within the given element
4 = "Black tea" reassigns the value of the innerText of the second paragraph tag within the document
5 [] allows one to make reference to the indexing used to refer to to all the elements within the document
*/
// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'
document.getElementsByTagName("li")[3].innerText = "Iced tea";
/* 
1 document selects the entirety of the HTML document
2 .getElementsByTagName allows you to select any given element by making reference to the name of tag combined with the use of indexing
3 .innerText then references the text within the given element
4 = "Black tea" reassigns the value of the innerText of the second paragraph tag within the document
5 [] allows one to make reference to the indexing used to refer to to all the elements within the document
*/
// You're eating Javascript, and again....I'm proud of you!

// 8. Declare a variable called lastName and add a value to it(value must be a string)
let lastName = `Adams`;
/*
1 let is a keyword used to initialize and declare a variable
2 lastName is the name of the variable
3 ''/""/``(which is a special case) allows us to declare a variable as a string
*/

// 9. Declare a variable called parentsAge and give it a value of 20(value must be a number)
let parentsAge = 20;
/*
1 let is a keyword used to initialize and declare a variable
2 parentsAge is the name of the variable
3 the number data type has no requirements to be declared
*/

// 10. Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
let coolCars = ["BMW", "Bugatti", "Ferrari", "McLaren", "Mercedes"];
/*
1 let is a keyword used to initialize and declare a variable
2 coolCars is the name of the variable
3 array is a data type that uses [] to declare the values to be stored in the array which is a variable
*/

//Now to manipulate the arrays. ;)
// 11. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
coolCars[3] = "Lamborghini";
/*
1 coolCars is the name of the array
2 [] used when referring to the value of the index
3 = "Lamborghini" rewrites the value of the index
*/

// 12. Use a for loop to loop through the array, and console.log every value inside of the array.
for (let c = 0; c < coolCars.length; c++) {
  console.log(coolCars[c]);
}
/*
1 for is a keyword used to make declare for loops which will run a certain number of times according to predefined conditions
2 () parenthesis are used to set parameters/arguments in this case it wass used to define the conditions of the for loop
3 .length will return the length of the array
4 console.log allows us to display the values within the console
5 Operators used: = equal to , < less than, ++ increment will increase by one each time the loop is ran
*/

// 13. Reverse the array and console.log the reversed array.
console.log(coolCars.reverse());
/*
1 for is a keyword used to make declare for loops which will run a certain number of times according to predefined conditions
2 () parenthesis are used to set parameters/arguments in this case it wass used to define the conditions of the for loop
3 console.log allows us to display the values within the console
4 .reverse reverses the values within the array
*/

// 14. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]
coolCars.reverse().pop();
console.log(coolCars);
/*
1 for is a keyword used to make declare for loops which will run a certain number of times according to predefined conditions
2 () parenthesis are used to set parameters/arguments in this case it wass used to define the conditions of the for loop
3 console.log allows us to display the values within the console
4 .reverse reverses the values within the array
5.splice allows us to remove the values within the array
*/

// 15. Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']
coolCars.unshift("Mercedes");
console.log(coolCars);
// .unshift adds values to the beginning of the array

//             Time to SWITCH it up a bit
// 16. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check
age = 17;
if (age > 18) {
  console.log("You are older than 18");
} else if (age == 18) {
  console.log("You are 18");
} else {
  console.log("You are younger than 18");
}

let checkAge =
  age >= 18
    ? console.log("Age is older than 18")
    : console.log("Age is younger than 18");

// 17. Make use of a switch statement and create a possible soultion for no.16
switch (true) {
  case age > 18:
    console.log("You are older than 18");
    break;

  case age == 18:
    console.log("You are 18");
    break;

  default:
    console.log("You are younger than 18");
    break;
}
// 18.     USE A SWITCH statement!!!!!
// A students Maths mark was 77%,their Physics marks was 70% and their English was 50%. You are required to calculate their average mark. Then we can check the average mark and return a messageto the console, if averageMark is :
//         100%-80%(message = "You did well your average was ..."),
//         79%-70%(message="You average was good, it was ..."),
//         69%-50%(message='Your average was okay, it was ..'),
//         49%-0% (message ='You must work harder next time')
let averageMark = ((77 + 70 + 50) / 3).toFixed(2);
switch (true) {
  case averageMark >= 80:
    console.log(`You did well your average was ${averageMark}`);
    break;
  case averageMark >= 70:
    console.log(`You average was good, it was ${averageMark}`);
    break;
  case averageMark >= 50:
    console.log(`Your average was okay, it was ${averageMark}`);
    break;
  default:
    console.log("You must work harder next time");
    break;
}

// 19. USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, increase the variable used by 1

let i = 0;
while (i <= parentsAge) {
  console.log(i);
  i++;
}

// 20. USE while or a do while loop to print out the array of Question15(coolCars).
let j = 0;
while (j < coolCars.length) {
  console.log(coolCars[j]);
  j++;
}
// 21. Create an object called chair and give it a
//         property of legs and a value of 4,
//         a secondProperty of material with a value of plastic
let chair = {
  legs: 4,
  material: "plastic",
};

// 22. Write the code that adds a property of
//         'armRestBars' with a value of 'none'
//         to the chair object.

chair.armRestBars = "none";
// 23.1.   What code will I write to view the value of the armRestBars.
chair.armRestBars;
// 23.2    What code can I use to delete the property of legs with the value of 4.
delete chair.legs;
// 24. Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of
//         name,
//         type,
//         year,
//         description
function electricalDeviceFactory(name, type, year, description) {
  return {
    name: name,
    type: type,
    year: year,
    description: description,
  };
}

// 24. Create 4 objects of your choice using a factory function and console.log() each of them
let device1 = new electricalDeviceFactory(
  "Samsung",
  "Gallaxy",
  2020,
  "4 Camaras to snap you"
);

let device2 = new electricalDeviceFactory(
  "Nokia",
  "Brick",
  2023,
  "Classified murder weapon"
);

let device3 = new electricalDeviceFactory(
  "Hawuei",
  "P33",
  2019,
  "China is great"
);

let device4 = new electricalDeviceFactory(
  "BlackBerry",
  "Z33",
  2021,
  "Comes with MixIt"
);

console.log(device1);
console.log(device2);
console.log(device3);
console.log(device4);

// 25. Create a constructor function to make an object of different car, types the properties should include,
//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains
function vroomVroom(brand, model, year, transmission, drivetrains) {
  this.brand, this.model, this.year, this.transmission, this.drivetrains;
}

let vroom1 = new vroomVroom("Toyota", "Supera", 2009, "Manuel", "BWD");
let vroom2 = new vroomVroom("MiniCopper", "Hub", 2012, "Manuel", "FWD");
let vroom3 = new vroomVroom("Tesla", "CyberTruck", 2023, "Automatic", "AWD");
let vroom4 = new vroomVroom("Bugatti", "Carron", 2022, "Manuel", "AWD");

// 26. Create 4 objects of your own and print to the console all of the created objects.
// 27. After, push the 4 objects to an array called 'informationAboutCars'.
// 28. Create a function that can be used 'globally', the function should return a sentence containing all the properties used inside the object, eg 'The car brand Ford has a model of a Figo that was produced in 2019. It is a manual and is a front wheel drive'
// 29. Make sure to write the above sentences for each car inside the corresponding h4 elements
// 30. Use the array in question10 that you created and create a conditional statement that check if 'BMW' appears in the array. The console should return 'This item does appear in the array' or 'The item does not appear in the array'
// 31. Declare an array and give it a value of [5, 18, 14, 16, 2, 1].
//     Create a program that returns the middle value of the current array, if array length is even return 2 numbers, if the array lengthis odd return 1 number
// 32. Go back to Question 16 and use the conditional statement you created. The age has to be requested from the user and the message ust be written to the html page in the corresponding element
