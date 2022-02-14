const select = document.querySelectorAll("select")
const convertValue = document.querySelectorAll("converti").innertext

fetch("https://api.frankfurter.app/currencies")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const entries = Object.entries(data);
        for (let i = 0; i < entries.length; i++) {
            select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
            select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        }
    })

document.querySelector("button").addEventListener("click", function(){
    //toutes les devises   
    const host = "api.frankfurter.app";

    const amountValue = document.getElementById("amount")
    const currency1 = select[0].value
    const currency2 = select[1].value


fetch(`https://${host}/latest?amount=${amountValue.value}&from=${currency1}&to=${currency2}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const valeur = Object.values(data.rates); 
        console.log(valeur)
        convertValue.innertext = valeur + " " + currency2
    })

})

fetch("https://api.frankfurter.app/currencies")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const entries = Object.entries(data);
        for (let i = 0; i < entries.length; i++) {
            select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
            select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        }
    })
