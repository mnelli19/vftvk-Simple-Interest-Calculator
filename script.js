

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    // validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"
    // nce the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box.

    if (principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }
}








