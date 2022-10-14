let formAmountEuroElement = document.querySelector(".js-formAmountEuro");
let formExchangeRateElement = document.querySelector(".js-formExchangeRate");
let formElement = document.querySelector(".js-form");
let formResultElement = document.querySelector(".js-formResult");

formElement.addEventListener ("submit", (event) => {
    event.preventDefault();

    let euro = formAmountEuroElement.value;
    let pln = formExchangeRateElement.value;
    let result = euro * pln;
    formResultElement.innerText = "Result: " + result.toFixed(2) + " PLN";
})



