//Certain code gathered from https://www.dougv.com/2006/12/fun-with-javascript-a-simple-test-quiz-script-to-demonstrate-dom-form-handling/
// Specifically true or false quiz
function CheckAnswers () {
  //Used to represent each question and the anwsers chosen
var quest1 = document.getElementsByName("INFJ");
var quest2 = document.getElementsByName("2friends");
var quest3 = document.getElementsByName("past");
var quest4 = document.getElementsByName("child");
var quest5 = document.getElementsByName("unique");
var answer = 0; //Set the right answer count to 0 every time the button is clicked
document.getElementById("Answers").innerHTML = " "; //Reset where the answers are printed

//Run through both true and false elements in the question, check which is chosen,
// and assign a point to the answers if the chosen is right
for (i=0; i < quest1.length; i++) {
  if (quest1[i].checked) {
    if (quest1[i].value == "true") {
      answer = answer + 1;
    }
  }

  if (quest2[i].checked) {
    if (quest2[i].value == "true") {
      answer = answer + 1;
    }
  }

  if (quest3[i].checked) {
    if (quest3[i].value == "false") {
      answer = answer + 1;
    }
  }

  if (quest4[i].checked) {
    if (quest4[i].value == "false") {
      answer = answer + 1;
    }
  }

  if (quest5[i].checked) {
    if (quest5[i].value == "true") {
      answer = answer + 1;
    }
  }
}
document.getElementById("Answers").innerHTML = answer + "/5 correct."; //print the amount of right answers
}

//Collects today's date and time, subtracts Stuart's birth time to create a life timer
function timeBirth () {
  var todayDate = new Date();
  var hour = todayDate.getHours();
  var minute = todayDate.getMinutes();
  var second = todayDate.getSeconds();
  var month = todayDate.getMonth() + 1;
  var day = todayDate.getDate();
  var year = todayDate.getFullYear();
  //Subtracting the stats of Stuart's birth date from today's date
  year = year - 2000;
  month = month - 3;
  day = day - 13;
  hour = hour - 10;
  //Printing the counter in the footer
  document.getElementById("tB").innerHTML= "Stuart has been gracing this earth for: " + year + " years, " + month + " months, " + day + " days, " + hour + " hours, " + minute + " minutes, " + second + " seconds.";
  setTimeout (timeBirth, 1000); //resetting the timer every second
}
