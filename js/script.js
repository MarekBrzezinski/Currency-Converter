{ 
    const updateResultText = (result) => {
        const formResultElement = document.querySelector(".js-formResult");
        formResultElement.innerText = "Result: " + result.toFixed(2) + " PLN";
    };

    const CalkulateResult = (event) => {
        event.preventDefault();

        const formAmountEuroElement = document.querySelector(".js-formAmountEuro");
        const formExchangeRateElement = document.querySelector(".js-formExchangeRate");
    
        const euro = formAmountEuroElement.value;
        const pln = formExchangeRateElement.value;
        const result = euro * pln;

        updateResultText (result)
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener ("submit", CalkulateResult);
    };

    init();
}