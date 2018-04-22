let pounds = document.querySelector('#pounds');
pounds.addEventListener('input', convertToKilos);

function convertToKilos() {
    let kilos = pounds.value * 0.454545455;
    document.querySelector('#kilograms').textContent = kilos;
}
