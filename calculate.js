let outPut = document.getElementById('calculation-output');

function calculator() {
    let income1 = parseInt(document.getElementById('income-1').value);
    let income2 = parseInt(document.getElementById('income-2').value);
    const entitlement = 1193.44
    const allowance = 673
    let totalIncome =  income1 + income2;
    let total = totalIncome - allowance;
    let deduction = 0.55 * total;

    let payment = Math.round(entitlement - deduction) 


    if(payment > 1935) {
        payment = 1935
    }
    if(payment < 0) {
        payment = 0
    }


    outPut.innerHTML = `With a total household income of £${totalIncome} you are entitled to £${payment} `
}
