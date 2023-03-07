// UKOL 1

function salary (wage,hours,days) {
    return hruba = wage*hours*days
}
function taxed (mzda,dan) {
    return cista = mzda*(100-dan)/100
}

// UKOL 2

function calculate (number1,operation,number2) {
    if (operation === "+") {
        return vysledek = number1 + number2
    }
    if (operation === "-") {
        return vysledek = number1 - number2
    }
    if (operation === "*") {
        return vysledek = number1 * number2
    }
    if (operation === "/") {
        return vysledek = number1 / number2
    }

}
//operace do konzole "+"

// UKOL 3

function selectPlan (planNumber) {
    if (planNumber === 1) {
        let vybrany = document.querySelector("#plan1");
        vybrany.classList.add("plan--selected");
        let nevybrany1 = document.querySelector("#plan2");
        nevybrany1.classList.remove("plan--selected");
        let nevybrany2 = document.querySelector("#plan3");
        nevybrany2.classList.remove("plan--selected");
    }
    if (planNumber === 2) {
        let vybrany = document.querySelector("#plan2");
        vybrany.classList.add("plan--selected");
        let nevybrany1 = document.querySelector("#plan1");
        nevybrany1.classList.remove("plan--selected");
        let nevybrany2 = document.querySelector("#plan3");
        nevybrany2.classList.remove("plan--selected");
    }
    if (planNumber === 3) {
        let vybrany = document.querySelector("#plan3");
        vybrany.classList.add("plan--selected");
        let nevybrany1 = document.querySelector("#plan2");
        nevybrany1.classList.remove("plan--selected");
        let nevybrany2 = document.querySelector("#plan1");
        nevybrany2.classList.remove("plan--selected");
    }
}
//operace do konzole obyč. čísla bez ničeho