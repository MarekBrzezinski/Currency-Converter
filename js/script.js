console.log ("bla bla bla")

let form__amountEuro = document.querySelector(".js-form__amountEuro");
let form__exchangeRate = document.querySelector(".js-form__exchangeRate");
let form = document.querySelector(".js-form");
let form__result = document.querySelector(".js-form__result");

form.addEventListener ("submit", (event) => {
    event.preventDefault();

    let euro = form__amountEuro.value;
    let pln = form__exchangeRate.value;
    let result = euro * pln
    form__result.innerText = "Result: " + result.toFixed(2) + " PLN"
})



