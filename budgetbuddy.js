"use strict";
const budgetForm = document.querySelector(".budget-form");
const balanceLeft = document.querySelector(".balance");
const expenseForm = document.querySelector(".item-description-form");
const total = document.querySelector(".total");
const bills = document.querySelector(".bills");
const clothing = document.querySelector(".clothing");
const entertainment = document.querySelector(".entertainment");
const food = document.querySelector(".food");
const itemsTable = document.querySelector(".item-table-body");
const clearButton = document.querySelector(".clear");

var ifStopper = true;

balanceLeft.textContent = "$0";
total.textContent = "$0";
bills.textContent = "$0";
clothing.textContent = "$0";
entertainment.textContent = "$0";
food.textContent = "$0";

let budgetBuddyDataBase = {
  budget: 0,
  remainingBalance: 0,
  total: 0,
  bills: 0,
  clothing: 0,
  entertainment: 0,
  food: 0,

  expenses: [],
};

const updateRemainingBalance = () => {
  const budgetInput = document.querySelector("#budget").value;
  budgetBuddyDataBase.budget = Number(budgetInput);
  budgetBuddyDataBase.budget =
    Math.round(budgetBuddyDataBase.budget * 100) / 100;

  budgetBuddyDataBase.remainingBalance =
    Number(budgetInput) - budgetBuddyDataBase.total;
  budgetBuddyDataBase.remainingBalance =
    Math.round(budgetBuddyDataBase.remainingBalance * 100) / 100;
  balanceLeft.textContent = `$${budgetBuddyDataBase.remainingBalance}`;
};

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  updateRemainingBalance();
  document.getElementById("budget").disabled = true;
  document.querySelector(".update-balance-button").classList.add("inactive");
  document
    .querySelectorAll(".item-description-form-element")
    .forEach((item) => {
      item.disabled = false;
    });
  e.target.classList.add("inactive");
});

const createTable = () => {
  itemsTable.innerHTML = `<tr>
    <th class="item-header">Item</th>
    <th class="item-header">Category</th>
    <th class="item-header">Amount ($)</th>
    <th class="item-header"></th>
  </tr>`;

  budgetBuddyDataBase.expenses.forEach((expense, index) => {
    const newItem = document.createElement("tr");
    const description = document.createElement("td");
    const category = document.createElement("td");
    const amount = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-index", index);
    deleteButton.textContent = "Delete";
    description.textContent = expense.description;
    category.textContent = expense.category;
    amount.textContent = `$${expense.amount}`;
    itemsTable.append(newItem);
    newItem.append(description, category, amount, deleteButton);
  });
};

const updateExpensesTable = () => {
  balanceLeft.textContent = `$${budgetBuddyDataBase.remainingBalance}`;
  total.textContent = `$${budgetBuddyDataBase.total}`;
  bills.textContent = `$${budgetBuddyDataBase.bills}`;
  clothing.textContent = `$${budgetBuddyDataBase.clothing}`;
  entertainment.textContent = `$${budgetBuddyDataBase.entertainment}`;
  food.textContent = `$${budgetBuddyDataBase.food}`;
};

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let description = document.querySelector("#item-description").value;
  let category = document.querySelector("#category").value;
  let amount = Number(document.querySelector("#amount").value);
  console.log(amount);
  budgetBuddyDataBase.expenses.push({
    description,
    category,
    amount,
  });
  budgetBuddyDataBase.total += amount;
  budgetBuddyDataBase.total = Math.round(budgetBuddyDataBase.total * 100) / 100;
  budgetBuddyDataBase[category] += amount;
  budgetBuddyDataBase[category] =
    Math.round(budgetBuddyDataBase[category] * 100) / 100;
  budgetBuddyDataBase.remainingBalance =
    budgetBuddyDataBase.budget - budgetBuddyDataBase.total;
  budgetBuddyDataBase.remainingBalance =
    Math.round(budgetBuddyDataBase.remainingBalance * 100) / 100;

  if (budgetBuddyDataBase.remainingBalance < 0) {

    document.createElement("img").src = "images/stop.jpg";
    document.querySelector("img").src = "images/stop.jpg";
    document.querySelector;
    document.createElement("img");
    document.querySelector("img").src = "images/stop.jpg";

    document.getElementById("add-button").disabled = true;

    document.getElementById("budget-balance-container").style.backgroundColor = "red";
    ifStopper = false;
    alert("You have busted your budget!");

  }
  //checks if the remaining balance is less than half of the total, then alerts the person using it once. 
  if(budgetBuddyDataBase.remainingBalance < budgetBuddyDataBase.total && ifStopper){
    alert("Halfway through your budget, please keep that in mind.");
    document.getElementById("budget-balance-container").style.backgroundColor = "yellow";
    ifStopper = false; 

  }
  updateExpensesTable();
  createTable();
  expenseForm.reset();
});

itemsTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let index = e.target.getAttribute("data-index");
    let amount = budgetBuddyDataBase.expenses[index].amount;
    let category = budgetBuddyDataBase.expenses[index].category;
    budgetBuddyDataBase.total -= amount;
    budgetBuddyDataBase.total =
      Math.round(budgetBuddyDataBase.total * 100) / 100;
    budgetBuddyDataBase[category] -= amount;
    budgetBuddyDataBase[category] =
      Math.round(budgetBuddyDataBase[category] * 100) / 100;
    budgetBuddyDataBase.expenses.splice(index, 1);

    updateExpensesTable();
    updateRemainingBalance();
    createTable();
  }
});

clearButton.addEventListener("click", () => {
  budgetBuddyDataBase = {
    budget: 0,
    remainingBalance: 0,
    total: 0,
    bills: 0,
    clothing: 0,
    entertainment: 0,
    food: 0,

    expenses: [],
  };
  document.querySelector("img").src = "images/budget-image.jpg";
  document.getElementById("add-button").disabled = false;
  document.getElementById("budget-balance-container").style.backgroundColor = "";
  ifStopper = true;
  updateExpensesTable();
  updateRemainingBalance();
  createTable();
  expenseForm.reset();
});
