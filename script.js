
if(firstClass.value == 0 && ecoClass.value == 0){
    document.getElementById('subTotal').innerText = 0;
    document.getElementById('vat').innerText = 0;
    document.getElementById('total').innerText = 0;
}

function seatCounter(id, isIncreased){
    const firstClassSeatSelection = parseInt(document.getElementById(id).value);
    let firstClassSeatNumber = 0;
    if(isIncreased == true){
        firstClassSeatNumber = firstClassSeatSelection + 1;
    }
    if(isIncreased == false && firstClassSeatSelection > 0){
        firstClassSeatNumber = firstClassSeatSelection - 1;
    }
    document.getElementById(id).value = firstClassSeatNumber;
    const subTotal = priceCalculator()
    const vat = subTotal * 0.1;
    const total = subTotal + vat;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;
}

function bookingDetails(){
    document.getElementById('ticket-booking').style.display = 'none';
    document.getElementById('ticket-details').style.display = 'block';
    document.getElementById('firstClassTicket').innerText = firstClass.value;
    document.getElementById('ecoClassTicket').innerText = ecoClass.value;
    document.getElementById('totalCost').innerText = parseFloat(document.getElementById('total').innerText);
    document.getElementById('ok').addEventListener('click', function(){
        document.getElementById('ticket-booking').style.display = 'block';
        document.getElementById('ticket-details').style.display = 'none';
    })

}

function priceCalculator(){
    const firstClassPrice = (parseInt(document.getElementById('firstClass').value)) * 150;
    const ecoClassPrice = (parseInt(document.getElementById('ecoClass').value)) * 100;

    const subTotal = firstClassPrice + ecoClassPrice;
    return subTotal;
}