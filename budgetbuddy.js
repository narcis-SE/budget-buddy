const budget = document.getElementById("budget");

const submitForm = document.getElementById("budget-submit-form");

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let totalBudget = budget.value;


    console.log(totalBudget);
});

anychart.onDocumentReady(function () {
  // set the data

  let food = 540000;
  let foodBudget = food;

  let data = [
    { x: "Total Spent", value: 223553265 },
    { x: "Bills", value: 38929319 },
    { x: "Clothing", value: 2932248 },
    { x: "Entertainment", value: 14674252 },
    { x: "Food", value: foodBudget },
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
});

