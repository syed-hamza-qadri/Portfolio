var displayValue = '';

function display(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
 
}

function clear() {
  displayValue = '';
  document.getElementById('display').value = '';
}
