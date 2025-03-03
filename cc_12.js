// Task 1: Business Dashboard- DOM element selection 
const dashboard1 = document.getElementById("dashboard"); // Using getElementById to select dashboard
const dashboard2 = document.querySelector('#dashboard'); // Using Query Selector to select dashboard
  
const revenueCard = document.createElement("div"); // Creating a new metric card in "div" called Revenue

revenueCard.setAttribute("class", "metric-card"); 
revenueCard.setAttribute("id", "revenueCard");

revenueCard.innerHTML =  // Populating the Revenue metric card
` <h3>Revenue</h3>
  <p>$0</p>`;

dashboard1.appendChild(revenueCard);

// Task 2:  Updating Dashboard Metrics – Working with NodeLists and Arrays
const metricCards = document.querySelectorAll(`.metric-card`); //selecting all elements with the class "metr"ic card"
const metricCardsArray = Array.from(metricCards); //converting NodeList to an array

metricCardsArray.forEach((card) => {
    card.innerText += ` - Updated`; //"- Updated" to text in card
    card.style.backgroundColor = `lightpink`; //changing background color
});

