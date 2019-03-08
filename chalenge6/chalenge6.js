var movementDescription;
var movementValue;

var expensesDescription = [];
var expensesValue = [];

var receiptsDescription = [];
var receiptsValue = [];

var movementList = document.getElementById("movementlist");

var expensesSum = 0;
var receiptSum = 0;

/** saves the values put in -- checks if it was positive or negative -- alerts if there are incorrect inputs*/
function onSubmit()
{
    /** Form inputs and their vairables */
    var transferValue = document.getElementById("transfervalue").value;
    var transfertype = document.getElementById("transfertype").value;
    var result;

    movementDescription = document.getElementById("description").value;
    movementValue = document.getElementById("moneyTransfer").value > 0 ? document.getElementById("moneyTransfer").value : false;

    /** innerHTML Values */
    var transferName;
    var moneyValue;
    var moneyuse;

    /** class Values */
    var iconColor = '';
    var iconType = '';
    var textColor = '';

    if (movementValue != false)
    {
        if (transferValue == "expenses")
        {
            console.log('AAA');
            expensesDescription.push(movementDescription);
            expensesValue.push(movementValue);

            iconColor = 'minusicon';
            iconType = 'fa-minus-circle';
            textColor = 'negative';

            document.getElementById("trackingform").reset();

            transferName = movementDescription;
            moneyValue = movementValue;

            result = expensesValue.map(Number);

            expensesSum = result.reduce(add);
            console.log("exp" + expensesSum);
            console.log("1 Name" + transferName);
            console.log("1 Value" + moneyValue);
        }
        else if (transferValue == "receipts")
        {
            console.log('BBB');
            receiptsDescription.push(movementDescription);
            receiptsValue.push(movementValue);

            iconColor = 'plusicon';
            iconType = 'fa-plus-circle';
            textColor = 'positive';

            document.getElementById("trackingform").reset();

            transferName = movementDescription;
            moneyValue = movementValue;

            result = receiptsValue.map(Number);

            receiptSum = result.reduce(add);
            console.log("rec" + receiptSum);
            console.log("2 Name" + transferName);
            console.log("2 Value" + moneyValue);
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

    console.log("3 Name" + transferName);
    console.log("3 Value" + moneyValue);

    if (transferName !== undefined && moneyValue !== undefined)
    {
        moneyuse = transfertype;

        /** gets current date */
        var currentDay = new Date;
        var date = currentDay.getDate() + '/' + (currentDay.getMonth()+1)+ '/' + currentDay.getFullYear();
        var time = currentDay.getHours() + ':' + currentDay.getMinutes() + ':' + currentDay.getSeconds();
        
        /** list element template */
        var movementListElement = '<div class="row justify-content-between transactionslist ">' +
        '<div class="col-1 icon">' +
        '<span class="fa-stack fa-xs ' + iconColor + ' ">' +
        '<i class="fas fa-circle fa-stack-2x"></i>' +
        '<i class="fas ' + iconType + ' fa-stack-1x fa-inverse fa-lg"></i>' +
        '</span>' +
        '</div>' +
        '<div class="col-11">' +
        '<div class="row justify-content-between transfer">' +
        '<div class="col-9 transfername">' + transferName + '</div>' +
        '<div class="col-3 text-right moneyvalue ' + textColor + ' ">€' + moneyValue + '</div>' +
        '</div>' +
        '<div class="row justify-content-between transferdescription">' +
        '<div class="col-4 date">' + date + '</div>' +
        '<div class="col-4 time">' + time + '</div>' +
        '<div class="col-4 text-right moneyuse">' + transfertype + '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
        
        var divListElement = document.createElement('div');
        
        divListElement.innerHTML = movementListElement;

        movementList.appendChild(divListElement);
    } else{
        console.log('put in values');
    }
}

/** adds the values in the arrays using reduce(add)*/
function add(added, a)
{
    return added + a;
}

/** adds the finalResult */
function getFinalResult(receipt, expense)
{
    var finalResult = receipt - expense;

    console.log("2" + finalResult);

    /** toFixed limits decimal houses to 2 */
    document.getElementById("totalbalance").innerHTML = finalResult.toFixed(2);

    console.log("3" + finalResult);

    return finalResult;
}