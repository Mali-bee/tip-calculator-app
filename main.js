const inputBill = document.querySelector('.bill-field');
const inputPeople = document.querySelector('.people-field');
const tipPerPerson = document.getElementById("tip-amount");
const totPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll('.tips');
const customTips = document.querySelector('.tip-field');
const resetBtn = document.querySelector('.reset');
const errMsg = document.querySelector('.error-message');

inputBill.addEventListener("input", billInputFunct);
inputPeople.addEventListener("input", peopleInputFunct);
tips.forEach(function(tipval){
    tipval.addEventListener("click", handleTipClick);
});
customTips.addEventListener('input', tipInputFunct);
resetBtn.addEventListener('click', resetEverything)

inputBill.value = '0.0';
inputPeople.value = '1';
tipPerPerson.innerHTML = "R" + (0.0).toFixed(2);
totPerPerson.innerHTML = "R" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

// to get the bill amount
function billInputFunct (){

    billValue = parseFloat(inputBill.value);
    // console.log(billValue);
    calculateTip();

}

// to get the amount of people who are tipping
function peopleInputFunct (){

    peopleValue = parseFloat(inputPeople.value);
    // console.log(peopleValue);
    calculateTip();

    if(peopleValue < 1){
        errMsg.style.display = "block";
        inputPeople.style.border = "thick solid red";
    }
    else {
        errMsg.style.display = "none";
        inputPeople.style.border = "none";
    }

    calculateTip();
}

// to get value of custom tip amount
function tipInputFunct() {

    tipValue=parseFloat(customTips.value / 100);

    tips.forEach(function (tipval) {
        tipval.classList.remove("active-tip");
    });
    calculateTip();
}

// tip calculate tip by selection of the tip boxes
function handleTipClick(tipevent) {

    tips.forEach(function(tipval){
        tipval.classList.remove("active-tip");

        if(tipevent.target.innerHTML == tipval.innerHTML) {
            tipval.classList.add("active-tip");
            tipValue = parseFloat(tipval.innerHTML)/100;
        }

    });
    // console.log(tipValue)
    calculateTip();
}

// does the tip cacluations and outputs the values for both the amount of the tip and the total bill
function calculateTip() {

    if(peopleValue >=1)
    {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "R" + tipAmount.toFixed(2);
        totPerPerson.innerHTML = "R" + total.toFixed(2);
    }

}

// reset entries and amounts back to default
function resetEverything() {

    inputBill.value = '0.0';
    billInputFunct();
    inputPeople.value = '1';
    peopleInputFunct();
    customTips.value= "";

}
