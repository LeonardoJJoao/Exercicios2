var movementDescription;
var movementValue;

var expensesDescription = [];
var expensesValue = [];

var receiptsDescription = [];
var receiptsValue = [];

var expensesTable = document.getElementById("expensesTable");
var receiptsTable = document.getElementById("receitsTable");

var expensesSum = 0;
var receiptSum = 0;

function onSubmit()
{
    var movementType = document.getElementById("options").value;
    var result;
    movementDescription = document.getElementById("description").value;
    movementValue = document.getElementById("value").value > 0 ? document.getElementById("value").value : false;

    const tr = document.createElement('tr');
    const td_description = document.createElement("td");
    const td_value = document.createElement("td");

    if (movementValue != false)
    {
        if (movementType == "expenses")
        {
            console.log('AAA');
            expensesDescription.push(movementDescription);
            expensesValue.push(movementValue);

            td_description.textContent = movementDescription;
            td_value.textContent = movementValue;

            expensesTable.appendChild(tr);
            tr.appendChild(td_description);
            tr.appendChild(td_value);

            document.getElementById("trackingform").reset();

            result = expensesValue.map(Number);

            expensesSum = result.reduce(add);
            console.log(expensesSum);
            document.getElementById("totalexpenses").innerHTML = expensesSum;
        }
        else if (movementType == "receipts")
        {
            console.log('BBB');
            receiptsDescription.push(movementDescription);
            receiptsValue.push(movementValue);

            td_description.textContent = movementDescription;
            td_value.textContent = movementValue;

            receiptsTable.appendChild(tr);
            tr.appendChild(td_description);
            tr.appendChild(td_value);

            document.getElementById("trackingform").reset();

            result = receiptsValue.map(Number);

            receiptSum = result.reduce(add);
            console.log(receiptSum);
            document.getElementById("totalreceipts").innerHTML = receiptSum;
        }
        else
        {
            alert('Please select if it\'s an expense or a receipt.');
        }
    } else
    {
        alert('Only positive numbers');
    }
    getFinalResult(receiptSum, expensesSum);
}

function add(added, a)
{
    return added + a;
}

function getFinalResult(receipt, expense)
{
    var finalResult = receipt - expense;

    console.log(finalResult);

    document.getElementById("resultBox").innerHTML = finalResult;

    if(finalResult < -20){
        document.getElementById("text").innerHTML = "You are broke - Go Work!!";
        document.getElementById("text").style.color = "red"
        console.log("text")
    }else if(finalResult > 20){
        document.getElementById("text").innerHTML = "You have still some money left!";
        document.getElementById("text").style.color = "green"
    }else{
        document.getElementById("text").innerHTML = "";
        document.getElementById("text").style.color = "#FFFFFF"
    }
    return finalResult;
}