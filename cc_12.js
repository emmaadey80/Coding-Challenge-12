// Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("\nTask 1: Business Dashboard");

const dashboard = document.getElementById("dashboard"); 
const dashboardAlt = document.querySelector("#dashboard");

const revenueCard = document.createElement("div"); // Creating a new div element for the Revenue card
revenueCard.setAttribute("class", "metric-card"); // Assigning a class to the new element
revenueCard.setAttribute("id", "revenueCard"); // Assigning an ID to the new element
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";
 
dashboard.appendChild(revenueCard); 