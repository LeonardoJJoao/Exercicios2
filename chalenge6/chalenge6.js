// // JavaScript

// var movementDescription;
// var movementValue;

// var movementList = document.getElementById("movementlist");
// var deleteList = document.getElementById("deleteList");

// let transactionNumber = 0;

// /** Info inside of Object --> description, amount, type, use */
// var transactionData = {};

// /** saves the values put in 
//  *  checks if it was positive or negative 
//  *  alerts if there are incorrect inputs
//  *  displays totalBalance and values*/
// function onSubmit()
// {
//     transactionNumber++;
//     /** Form inputs and their vairables */
//     /** Description */movementDescription = document.getElementById("description").value;
//     /** Amount */movementValue = document.getElementById("moneyTransfer").value > 0 ? document.getElementById("moneyTransfer").value : false;
//     /** Type */var transferType = document.getElementById("transfervalue").value;
//     /** Use */var transfertUse = document.getElementById("transfertype").value;

//     var transactionID = "transactionNumber_" + transactionNumber;

//     if(transferType == "expenses"){
//         movementValue = -movementValue;
//     }

//     /** adds new information to Object --> nested Object */
//     transactionData[transactionID] = {
//         description: movementDescription,
//         value: movementValue,
//         type: transferType,
//         use: transfertUse
//     }

//     console.log(transactionData);

//     var movValNumber = parseFloat(movementValue);

//     /** class Values */
//     var iconColor = '';
//     var iconType = '';
//     var textColor = '';

//     //create new list element
//     var divListElement = document.createElement('div');

//     //** general element atributes */
//     divListElement.setAttribute("class", transactionID);
//     divListElement.setAttribute("id", transactionID);

//     if (movementValue != false)
//     {
//         if (transferType == "expenses")
//         {
//             iconColor = 'minusicon';
//             iconType = 'fa-minus-circle';
//             textColor = 'negative';

//             document.getElementById("trackingform").reset();


//             console.log('AAA');
//             console.log("1 Name-" + movementDescription);
//             console.log("1 Value-" + movementValue);
//         }
//         else if (transferType == "receipts")
//         {
//             iconColor = 'plusicon';
//             iconType = 'fa-plus-circle';
//             textColor = 'positive';

//             document.getElementById("trackingform").reset();

//             console.log('BBB');
//             console.log("2 Name-" + movementDescription);
//             console.log("2 Value-" + movementValue);
//         }
//         else
//         {
//             alert('Please select if it\'s an expense or a receipt.');
//             return null;
//         }
//     } else
//     {
//         alert('Only positive numbers');
//         return null;
//     }

//     /** display totalBalance */
//     console.log("num" + transactionNumber + " -- type" + transferType);
//     var totalValue = getTotalBalance(transactionNumber);
//     document.getElementById("totalbalance").innerHTML = totalValue.toFixed(2);

//     /** remove minus sign from displayed number */
//     if(movValNumber<0){
//         movValNumber = -movValNumber
//     }

//     if (movementDescription !== undefined && movementValue !== undefined)
//     {
//         /** gets current date */
//         var currentDay = new Date;
//         var date = currentDay.getDate() + '/' + (currentDay.getMonth() + 1) + '/' + currentDay.getFullYear();
//         var time = currentDay.getHours() + ':' + currentDay.getMinutes() + ':' + currentDay.getSeconds();

//         /** list element template */
//         var movementListElement = '<div class="row justify-content-between transactionslist ">' +
//             '<div class="col-1 icon">' +
//             '<span class="fa-stack fa-xs ' + iconColor + ' ">' +
//             '<i class="fas fa-circle fa-stack-2x"></i>' +
//             '<i class="fas ' + iconType + ' fa-stack-1x fa-inverse fa-lg"></i>' +
//             '</span>' +
//             '</div>' +
//             '<div class="col-11">' +
//             '<div class="row justify-content-between transfer">' +
//             '<div class="col-9 transfername">' + movementDescription + '</div>' +
//             '<div class="col-3 text-right moneyvalue ' + textColor + '">€' + movValNumber.toFixed(2) + '</div>' +
//             '</div>' +
//             '<div class="row justify-content-between transferdescription">' +
//             '<div class="col-4 date">' + date + '</div>' +
//             '<div class="col-4 time">' + time + '</div>' +
//             '<div class="col-4 text-right moneyuse">' + transfertUse + '</div>' +
//             '</div>' +
//             '</div>' +
//             '</div>';


//         divListElement.innerHTML = movementListElement;
//         movementList.appendChild(divListElement);

//         //add description(movementDescription) to deleteList
//         var optDeleteList = document.createElement('option');
//         optDeleteList.setAttribute("class", transactionID);

//         optDeleteList.innerHTML = movementDescription;

//         deleteList.appendChild(optDeleteList);
//     } else
//     {
//         console.log('put in values');
//     }
// }



// JQuery

const movementList = $('.movementlist')
const deleteList = $("#deleteList");

let transactionNumber = 0;

let transactionData = {};


function onSubmit()
{
    transactionNumber++;
    
    const movementDescription = $('#description').val();
    let movementValue = $('#moneyTransfer').val() > 0 ? $('#moneyTransfer').val() : false;
    const transferType = $('#transfervalue').val();
    const transfertUse = $('#transfertype').val();
    
    const submitForm = $('#trackingform')[0];
    
    let transactionID = "transactionNumber_" + transactionNumber;
    
    if (transferType == "expenses")
    {
        movementValue = -movementValue;
    }
    
    transactionData[transactionID] = {
        description: movementDescription,
        value: movementValue,
        type: transferType,
        use: transfertUse
    }
    
    var movValNumber = parseFloat(movementValue);
    
    let iconColor = '';
    let iconType = '';
    let textColor = '';
    
    let divListElement = $(document.createElement('div'));

    divListElement.attr("class", transactionID);
    divListElement.attr("id", transactionID);
    
    if (movementValue != false)
    {
        if (transferType == "expenses")
        {
            iconColor = 'minusicon';
            iconType = 'fa-minus-circle';
            textColor = 'negative';
            
            submitForm.reset();
            
            console.log('AAA');
            console.log("1 Name-" + movementDescription);
            console.log("1 Value-" + movementValue);
        }
        else if (transferType == "receipts")
        {
            iconColor = 'plusicon';
            iconType = 'fa-plus-circle';
            textColor = 'positive';
            
            submitForm.reset();
            
            console.log('BBB');
            console.log("2 Name-" + movementDescription);
            console.log("2 Value-" + movementValue);
        }
        else
        {
            alert('Please select if it\'s an expense or a receipt.');
            return null;
        }
    } else
    {
        alert('Only positive numbers');
        return null;
    }
    
    let totalValue = getTotalBalance(transactionNumber);
    $('#totalbalance').html(totalValue.toFixed(2));
    
    if (movValNumber < 0)
    {
        movValNumber = -movValNumber
    }
    
    if (movementDescription !== undefined && movementValue !== undefined)
    {
        /** gets current date */
        let currentDay = new Date;
        let date = currentDay.getDate() + '/' + (currentDay.getMonth() + 1) + '/' + currentDay.getFullYear();
        let time = currentDay.getHours() + ':' + currentDay.getMinutes() + ':' + currentDay.getSeconds();
        
        /** list element template */
        let movementListElement = '<div class="row justify-content-between transactionslist ">' +
        '<div class="col-1 icon">' +
        '<span class="fa-stack fa-xs ' + iconColor + ' ">' +
        '<i class="fas fa-circle fa-stack-2x"></i>' +
        '<i class="fas ' + iconType + ' fa-stack-1x fa-inverse fa-lg"></i>' +
        '</span>' +
        '</div>' +
        '<div class="col-11">' +
        '<div class="row justify-content-between transfer">' +
        '<div class="col-9 transfername">' + movementDescription + '</div>' +
        '<div class="col-3 text-right moneyvalue ' + textColor + '">€' + movValNumber.toFixed(2) + '</div>' +
        '</div>' +
        '<div class="row justify-content-between transferdescription">' +
        '<div class="col-4 date">' + date + '</div>' +
        '<div class="col-4 time">' + time + '</div>' +
        '<div class="col-4 text-right moneyuse">' + transfertUse + '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
        
        divListElement.html(movementListElement);
        $('.movementlist').append(divListElement);
        
        //add description(movementDescription) to deleteList
        var optDeleteList = $(document.createElement('option'));
        optDeleteList.attr("class", transactionID);
        
        optDeleteList.html(movementDescription);
        
        deleteList.append(optDeleteList);
        
    } else
    {
        console.log('put in values');
    }
}

// /** adds new TransferType getting user input */
function addTransferTypeOption()
{
    var newTransferType = $("#new-transfertype").val();
    if(newTransferType != 0){
    var optTransferType = $(document.createElement('option'));

    optTransferType.value = newTransferType;
    optTransferType.html(newTransferType);

    $('#transfertype').append(optTransferType);
    $("#newstuffform")[0].reset();
    }else{
        alert('Put in a new Transfer Type');
    }
}

// /** Deletes selected member */
function deleteListMember()
{
    var deleteListItem = $("#deleteList")[0];
    var selectedItem = deleteListItem.options[deleteListItem.selectedIndex].classList;

    console.log(selectedItem);
    console.log(document.getElementById("deleteList").classList);
    console.log("delete-.-.-.-.-" + deleteListItem);

    var selectedTransaction = selectedItem[0].slice(-1);
    var selectedItems = $('body').find('.' + selectedItem[0]).remove();

    // deletes object
    delete transactionData[selectedItem];

    console.log("selectedTransaction" + selectedTransaction);
    console.log(selectedItems);

    let totalValue = getTotalBalance(transactionNumber);
    $('#totalbalance').html(totalValue.toFixed(2));
}

// /** Calculation of the totalBalance -- gets all values from all nested objects and adds them */
function getTotalBalance(transactionNumber)
{
    var transaction;
    var totalValue = 0;
    var thisNumber;

    for (var i = 1; i <= transactionNumber; i++)
    {
        transaction = "transactionNumber_" + i;
        console.log(i + "-----" + transaction);

        /** Checks if total is not undefined, so it is 0 instead*/
        if (transactionData[transaction] != undefined)
        {
            thisNumber = parseFloat(transactionData[transaction].value);
            console.log(thisNumber);
        } else
        {
            thisNumber = 0;
        }
        totalValue += thisNumber;
    }
    return totalValue;
}