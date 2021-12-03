const budget = document.getElementById("budget");

const bills = document.getElementById("bills");
const food = document.getElementById("food");
const clothes = document.getElementById("clothes");
const entertainment = document.getElementById("entertainment");

const submitForm = document.getElementById("budget-submit-form");




submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let totalBudget = budget.value;
    let totalBills = bills.value;
    let totalFood = food.value;
    let totalClothes = clothes.value;
    let totalEntertainment = entertainment.value;

    if(totalBudget < (totalBills + totalFood + totalClothes + totalEntertainment)){
       document.getElementById("image").src = "https://previews.123rf.com/images/arcady31/arcady311003/arcady31100300022/6597624-stop-sign.jpg";
        
    } else{

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

    //let totalBills = 
    
});


