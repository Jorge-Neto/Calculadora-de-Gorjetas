function onSubmit(event) {
    event.preventDefault();
    var bill = parseInt(document.getElementById('bill').value);
    var serviceQ = parseFloat(document.getElementById('serviceQuality').value);
    var numOfPeople = parseInt(document.getElementById('people').value);

    if (serviceQ != 0 && bill != 0 && numOfPeople != 0) {
        let totalTip = 0;
        let rate = (bill * serviceQ);

        if (numOfPeople == 1) {
            document.getElementById('each').style.display = 'none'
            totalTip = rate + bill;
        } else {
            document.getElementById('each').style.display = 'block'
            totalTip = (rate + bill) / numOfPeople;
        }
        return document.getElementById('tip').innerHTML = totalTip;
    } else {
        alert('Algum campo possui valores inválidos');
        return;
    }

};

document.getElementById('tipsForm').addEventListener('submit', onSubmit);
document.getElementById('people').addEventListener('change', onSubmit);