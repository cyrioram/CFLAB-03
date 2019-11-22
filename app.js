'use strict';

//Obtain users name provide a personal greeting

var userName = prompt('Salutations! What is your name?');
console.log('The Users name is:', userName);
alert('Excited to meet you ' + userName + ' !' + ' Let us see how well you know David through a series of 5 YES and NO questions.')

//1st question about fav food + set response UPPERCASE

var favFood = prompt('Is spaghetti David\'s favorite food?');
console.log('Faves Spaghetti:', favFood.toUpperCase());

if (favFood === 'YES' || favFood ==='Y') {
  //Provide cofirmative feedback
  alert('You are absolutely right. David loves spaghetti!');
} else {
  //Provide negative feedback
  alert('You are not correct. Spaghetti is Dave\'s favorite food.');
}

//2nd question about fav color + set response UPPERCASE

var favColor = prompt('Is red David\'s favorite color?').toUpperCase();
console.log('Favors Red:', favColor);

if (favColor === 'NO' || favColor === 'N') {
  //Provide cofirmative feedback
  alert('You are absolutely right. David loves the color blue!');
} else {
  //Provide negative feedback
  alert('That\'s not correct. That is not Dave\'s favorite color.');
}

//3rd question about fav sport + set response UPPERCASE

var favSport = prompt('Is volleyball David\'s favorite sport?').toUpperCase();
console.log('Favors Volleyball:', favSport);

if (favSport === 'YES' || favSport === 'Y') {
  //Provide cofirmative feedback
  alert('You are absolutely right. David enjoys volleyball the most!');
} else {
  //Provide negative feedback
  alert('That\'s not correct. Vollyball is in fact Dave\'s favorite sport next to Olympic tennis.');
}

//4th question about fav football team + set response UPPERCASE

var favTeam = prompt('Are the Dallas Cowbowys David\'s favorite NFL Team?').toUpperCase();
console.log('Favors Baltimore:', favTeam);

if (favTeam === 'YES' || favTeam === 'Y') {
  //Provide negative cofirmative feedback
  alert('You are absolutely incorrect. David enjoys the Baltimore Raven\'s the most!');
} else {
  //Provide positive feedback
  alert('That\'s correct. The Cowboys are not David\'s Team.');
}


//5th question about fav music genre + set response UPPERCASE

var favGenre = prompt('Is country music David\'s favorite music genre').toUpperCase();
console.log('Favors Country:', favGenre);

if (favGenre === 'YES' || favGenre === 'Y') {
  //Provide negative cofirmative feedback
  alert('You are absolutely incorrect. David enjoys the Hip Hop the most!');
} else {
  //Provide positive feedback
  alert('That\'s correct. David absolutely can\'t stand country music.');
}

//6th Ask User to guess a number 4 times and provide hints

var number;
var counter = 1;


while(number !== 100) {
  number = parseInt(prompt('what is David\'s favorite number?'));

  if (counter >= 4) {
    alert('The correct answer was 100!');
    number = 100;
  } else if (number < 100) {
    alert('You guessed too low!');
    counter++;
  } else if (number > 100) {
    alert('You guessed too high!');
    counter++;
  } else if (number === 100) {
    alert('You guessed right!');
    counter++;
  //}else if (number === NaN || number === null) {
  } else if (isNaN(number)){

    alert('Please enter a real number');
    counter++;
  }
}


alert(userName + ' , thanks for visiting the site and playing along!');