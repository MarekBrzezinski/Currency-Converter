console.log ("bla bla bla")

let formAmountEuro = document.querySelector(".js-formAmountEuro");
let formExchangeRate = document.querySelector(".js-formExchangeRate");
let form = document.querySelector(".js-form");
let formResult = document.querySelector(".js-formResult");

form.addEventListener ("submit", (event) => {
    event.preventDefault();

    let euro = formAmountEuro.value;
    let pln = formExchangeRate.value;
    let result = euro * pln;
    formResult.innerText = "Result: " + result.toFixed(2) + " PLN";
})



