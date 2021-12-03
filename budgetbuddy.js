const budget = document.getElementById("budget");

const submitForm = document.getElementById("budget-submit-form");

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let totalBudget = budget.value;


    console.log(totalBudget);
});

