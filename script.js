
document.getElementById('mortgage-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loan-term').value) * 12;
    
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert('Please fill out all fields correctly.');
        return;
    }
    
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    const totalPayment = monthlyPayment * loanTerm;
    
    document.getElementById('monthly-payment').textContent = `₹${monthlyPayment.toFixed(2)}`;
    document.getElementById('total-payment').textContent = `₹${totalPayment.toFixed(2)}`;
    document.getElementById('results').style.display = 'block';
});
