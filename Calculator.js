const calculator = () => {
    let form = document.getElementById('form');
    let billAmount = form.elements['bill'].value;
    let numberOfPersons = form.elements["persons"].value;
    let service = document.getElementById('servLevel');
    let serviceValue = service.value;
    let tip = 0;
    let printTip = document.getElementById('tip');

    tip = billAmount * serviceValue / numberOfPersons;

    printTip.innerText = tip;
    console.log(billAmount);
};

let tipCalculated = document.getElementById("calculate");


tipCalculated.addEventListener("click", calculator);