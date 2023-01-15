// Function to get user input
var wellnessInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget?"));
  var accomodation = Number(prompt("What is your weekly wellness cost?"));
  var numDays = Number(prompt("How many days do purchase wellness items or services?"));

  // Funtion to calculate daily budget
  calculateDailyBudget(totalBudget, accomodation, numDays);
};

var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  var daily = ((totalBudget - accommodation) / numDays).toFixed(2);

  dailyBudget.innerText = `You can spend $${daily} on your wellness needs!`;
};

//Call function and add a click event
wellnessInfoButton.addEventListener("click", tripInfo);
