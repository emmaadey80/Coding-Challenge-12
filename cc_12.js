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

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
const metricCards = document.querySelectorAll(`.metric-card`); // selecting all elements with the class "metr"ic card"
const metricCardsArray = Array.from(metricCards); // Convert the NodeList into an array using Array.from()

metricCardsArray.forEach((card) => {
    card.innerText += ` - Updated`; //"- Updated" to text in card
    card.style.backgroundColor = `lightpink`; //changing background color of card
});

//Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(product) { // Function to add a new product item to the inventory list
    let newLi = document.createElement("li"); 
    newLi.setAttribute("class","product-item"); 
    newLi.setAttribute("dataset",product); 
    newLi.addEventListener("click", () => {removeInventoryItem(newLi)}); 
    newLi.textContent = product; 
    inventoryList.appendChild(newLi); 
};

addInventoryItem("Click Below!"); //Adding inventory item (click below!)
addInventoryItem("Choose Item"); // Adding inventory item (choose item)

let productForm = document.getElementById('productForm');
let error = document.getElementById('error');

productForm.addEventListener('submit', (event) => { // Adding an event listener for a click of the submit button
    let productName = document.getElementById('productName').value; // Storing the content of the productName text input
    if (productName.trim() === '') { // Checking if the input is empty
        error.textContent = 'Product Name Error'; // Error message
        event.preventDefault(); // Prevent form submission
    } else {
        error.textContent = '';
        addInventoryItem(productName); // Calling addInventoryItem()
        event.preventDefault(); 
    }
});

function removeInventoryItem(item) { 
    inventoryList.removeChild(item); //Use removeChild within the inventory list to remove the clicked item.
};

