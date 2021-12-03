console;

const budget = document.getElementById("budget");
const itemDescriptionForm = document.querySelector(".item-description-form");
const itemTableBody = document.querySelector(".item-table-body");
const bills = document.getElementById("bills");
const food = document.getElementById("food");
const clothes = document.getElementById("clothes");
const entertainment = document.getElementById("entertainment");
const submitForm = document.getElementById("budget-submit-form");

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let totalBudget = budget.value;
  // let totalBills = bills.value;
  // let totalFood = food.value;
  // let totalClothes = clothes.value;
  // let totalEntertainment = entertainment.value;
  console.log(totalBudget);

  if (
    totalBudget <
    totalBills + totalFood + totalClothes + totalEntertainment
  ) {
    document.getElementById("image").src = "images/stop.jpg";
  } else {
    let data = [
      { x: "Total Spent", value: totalBudget },
      { x: "Bills", value: totalBills },
      { x: "Clothing", value: totalFood },
      { x: "Entertainment", value: totalClothes },
      { x: "Food", value: totalEntertainment },
    ];

    // create the chart
    let chart = anychart.pie();

    // set the chart title
    chart.title("Total Amount Spent");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container("container");
    chart.draw();
  }
});

itemDescriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const addedItemRow = document.createElement("tr");
  itemTableBody.append(addedItemRow);
  for (let i = 0; i < 4; i++) {
    const addedItem = document.createElement("td");
    addedItemRow.append(addedItem);
    if (i === 0) {
      addedItem.textContent = document.querySelector("#item-description").value;
    } else if (i === 1) {
      addedItem.textContent = document.querySelector("#category").value;
    } else if (i === 2) {
      addedItem.textContent = `$${document.querySelector("#amount").value}`;
    } else if (i === 3) {
      const button = document.createElement("button");
      addedItem.append(button);
      button.textContent = "Delete";
      button.classList.add("delete");
    }
  }
  //   grabs category we've selected
  const category = document.querySelector("#category").value;
  //   removes $ sign
  document.querySelector(`.${category}`).textContent = document
    .querySelector(`.${category}`)
    .textContent.slice(1);
  // sets variable amount to the value we have input
  let amount = parseFloat(document.querySelector("#amount").value);
  //   sets variable total to the integer found in the selected category
  let total = parseFloat(document.querySelector(`.${category}`).textContent);
  //   sets variable balance equal to total + amount
  let balance = total + amount;
  //   puts balance into proper td in table
  document.querySelector(`.${category}`).textContent = `$${balance}`;
  calculateTotal();
  updateBalance();
  itemDescriptionForm.reset();
});
