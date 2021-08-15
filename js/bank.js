document.getElementById('depoBtn').addEventListener('click', function () {
    // deposit 
    const depositInput = document.getElementById('depoInput');
    const depositValue = depositInput.value;

    const depositBank = document.getElementById('deposit');
    const previousDepo = depositBank.innerText;

    const totalDeposit = parseFloat(previousDepo) + parseFloat(depositValue);
    depositBank.innerText = totalDeposit;

    // balance 
    const balance = document.getElementById('balance');
    const previousBalance = balance.innerText;
    const balanceTotal = parseFloat(previousBalance) + parseFloat(depositValue);
    balance.innerText = balanceTotal;

    // clear input field 
    depositInput.value = '';

});


// withdraw 
document.getElementById('withdrawBtn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawInput');
    const withdrawValue = withdrawInput.value;

    const withdraw = document.getElementById('withdraw');
    const previousWithdraw = withdraw.innerText;

    const totalWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawValue);
    withdraw.innerText = totalWithdraw;


    // after withdraw balance 
    const preBalance = document.getElementById('balance');
    const preBalanceValue = parseFloat(preBalance.innerText);
    const currentBalance = preBalanceValue - parseFloat(withdrawValue);
    preBalance.innerText = currentBalance;

    // const afterWithdrawBalance = balanceTotal - totalWithdraw;
    // balance.innerText = afterWithdrawBalance;

    withdrawInput.value = '';

})