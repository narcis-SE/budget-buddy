const budget = document.getElementById("budget");

const submitForm = document.getElementById("budget-submit-form");




submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let totalBudget = budget.value;
    //let totalBills = 
    let data = [
        { x: "Total Spent", value: totalBudget },
        { x: "Bills", value: 0 },
        { x: "Clothing", value: 0 },
        { x: "Entertainment", value: 0 },
        { x: "Food", value: 0 },
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

anychart.onDocumentReady(function () {
  // set the data

  let food = 540000;
  let foodBudget = food;


});

