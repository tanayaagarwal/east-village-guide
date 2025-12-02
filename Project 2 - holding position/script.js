let totalAmount = 0;

/* Code adapted from https://www.w3schools.com/jsref/met_document_queryselectorall.asp?utm_source=chatgpt.com */
document.querySelectorAll('.menu-recommendations li').forEach(item => {
  item.addEventListener('click', function() {
        
    const name = this.dataset.item;
    const price = parseFloat(this.dataset.price);
    
    document.getElementById('receipt-items').innerHTML += `
      <div class="receipt-item">
        <span>${name}</span>
        <span>$${price.toFixed(2)}</span>
      </div>
    `;
    
    totalAmount += price;
    document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;
    
    const remaining = 20 - totalAmount;
    document.getElementById('remaining-amount').textContent = `$${remaining.toFixed(2)}`;
    
    if (remaining < 0) {
      document.getElementById('remaining').style.color = '#e74c3c';
    }
  });
});