document.getElementById('taxForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Validate input fields
    let isValid = true;
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
      if (!input.value) {
        isValid = false;
        input.nextElementSibling.style.display = 'block'; // Show error icon
        input.nextElementSibling.dataset.error = 'This field is mandatory'; // Set error message
      }
      //  else {
      //   input.nextElementSibling.style.display = 'none'; // Hide error icon
      // }
    });
  
    if (isValid) {
      // Calculate tax
      const grossIncome = parseFloat(document.getElementById('grossIncome').value);
      const extraIncome = parseFloat(document.getElementById('extraIncome').value);
      const deductions = parseFloat(document.getElementById('deductions').value);
      const age = document.getElementById('age').value;
      let totalIncome = grossIncome + extraIncome - deductions;
      let tax = 0;
      if (totalIncome > 800000) {
        if (age === '<40') {
          tax = 0.3 * (totalIncome - 800000);
        } else if (age === '>=40&<60') {
          tax = 0.4 * (totalIncome - 800000);
        } else if (age === '>=60') {
          tax = 0.1 * (totalIncome - 800000);
        }
      }
  
      // Show modal with final tax calculation
      const modal = document.getElementById('modal');
      const taxResult = document.getElementById('taxResult');
      taxResult.innerHTML = `Final Tax Calculation: Tax to be paid: ${tax.toFixed(2)} Lakhs`;
      modal.style.display = 'block';
  
      // Close the modal when the close button is clicked
      const closeBtn = document.getElementsByClassName('close')[0];
      closeBtn.onclick = function() {
        modal.style.display = 'none';
      };
  
      // Close the modal when clicking outside the modal
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      };


      
    }
  });


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
  