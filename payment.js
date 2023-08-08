/*const summaryTableHTML = localStorage.getItem('summaryTableHTML');
  
    // Display summary table in the details page
    document.getElementById('summary-table').innerHTML = summaryTableHTML;*/
    window.onload = function () {
        const summaryTableHTML = localStorage.getItem('summaryTableHTML');
  
        // Display summary table in the details page
        document.getElementById('summary-table').innerHTML = summaryTableHTML;
        const cardNumberInput = document.getElementById('card-number');
        const expiryInput = document.getElementById('expiry-date');
        const cvcInput = document.getElementById('cvc');
        const nameOnCardInput = document.getElementById('name-on-card');
        const payButton = document.getElementById('pay-button');
      
        const cardNumberError = document.getElementById('card-number-error');
        const expiryError = document.getElementById('expiry-error');
        const cvcError = document.getElementById('cvc-error');
        const nameOnCardError = document.getElementById('name-on-card-error');
      
        cardNumberInput.addEventListener('input', validateCardNumber);
        expiryInput.addEventListener('input', validateExpiry);
        cvcInput.addEventListener('input', validateCVC);
        nameOnCardInput.addEventListener('input', validateNameOnCard);
      
        function validateCardNumber() {
          if (cardNumberInput.value.length < 16) {
            cardNumberError.textContent = 'Card number must be 16 digits';
          } else {
            cardNumberError.textContent = '';
          }
          validateForm();
        }
      
        function validateExpiry() {
          if (!expiryInput.value.match(/^\d{2}\/\d{2}$/)) {
            expiryError.textContent = 'Expiry date must be in the format MM/YY';
          } else {
            expiryError.textContent = '';
          }
          validateForm();
        }
      
        function validateCVC() {
          if (cvcInput.value.length < 3) {
            cvcError.textContent = 'CVC must be 3 digits';
          } else {
            cvcError.textContent = '';
          }
          validateForm();
        }
      
        function validateNameOnCard() {
          if (nameOnCardInput.value.trim() === '') {
            nameOnCardError.textContent = 'Name on card is required';
          } else {
            nameOnCardError.textContent = '';
          }
          validateForm();
        }
      
        function validateForm() {
          if (
            cardNumberError.textContent === '' &&
            expiryError.textContent === '' &&
            cvcError.textContent === '' &&
            nameOnCardError.textContent === ''
          ) {
            payButton.disabled = false;
          } else {
            payButton.disabled = true;
          }
        }
      
        payButton.addEventListener('click', function () {
          window.location.href = 'confirmation.html';
        });
      };
      
      