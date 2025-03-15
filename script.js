// declaring a fixed budget

const fixedBudget = 100;
let expense ;

// creating an object spending


const spending = {
    budget: "",
    expense: "",
}

// writting the get remaining method


const getRemaining = function(){
    return document.getElementById("remainingDisplay").innerHTML = "Remaining: " + "$" + (fixedBudget - expenseInput.value)  ;
}

// function to add expense


function addExpense(){
    return document.getElementById("expenseDisplay").innerHTML = "spent :" + "$" + expenseInput.value ;
}

spending.expense = document.getElementById("expenseDisplay");
const expenseInput = document.getElementById("expenseInput");

// invoking the function with a button id


const expenseBtn = document.getElementById("btn");

// updating the  spending objects

spending.expense = document.getElementById("expenseInput").value;
spending.budget = fixedBudget;


//  calling the function and the method
expenseBtn.addEventListener('click', 
    function(){
        addExpense();
        getRemaining();
        updateDisplay();
    }
)


// writing the update display
  function updateDisplay(){
    return document.getElementById("updatedisplay").innerHTML = "The budget is " + spending.budget + " the expenses is $" + expenseInput.value +  " and the budget   " + getRemaining();
}

// const updateDisplayMessage = updateDisplay();
//  = updateDisplay();



 
console.log(spending);
