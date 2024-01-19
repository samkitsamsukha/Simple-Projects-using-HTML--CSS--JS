const btnEl = document.getElementById('calculate');

btnEl.addEventListener("click", calculateTotal);

var result = document.getElementById("total");
const billInput=document.getElementById("bill");
const tipInput=document.getElementById("tip");

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    // const totalAmount = billValue + ((tipValue/100)*billValue);
    if(billValue == 0){
        result.innerText = " Please enter a non zero bill amount";
    }
    else if(tipValue == 0){
        result.innerText = " Please enter a non zero tip percent.";
    }
    else if(billValue < 0)
    {
        result.innerHTML = " Please enter a non negative value for bill amount.";
    }
    else if(tipValue < 0)
    {
        result.innerHTML = " Please enter a non negative value for tip percent";
    }
    else{
        const totalAmount = billValue * (1+(tipValue/100))
    // console.log(totalAmount);
    result.innerText = totalAmount.toFixed(2);
    }
    
}