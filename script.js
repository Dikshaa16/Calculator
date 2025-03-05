let memory = 0; // Variable to store the memory value

// Clear the display
function clearDisplay() {
  document.getElementById('result').value = '';
}

// Delete the last character in the display
function deleteLast() {
  let currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

// Append value to the display
function appendToDisplay(value) {
  document.getElementById('result').value += value;
}

// Perform calculation
function calculate() {
  let currentValue = document.getElementById('result').value;
  try {
    // If there's a trigonometric or other special function, handle it correctly
    if (currentValue.includes('sin')) {
      document.getElementById('result').value = Math.sin(parseFloat(currentValue.replace('sin', '')));
    } else if (currentValue.includes('cos')) {
      document.getElementById('result').value = Math.cos(parseFloat(currentValue.replace('cos', '')));
    } else if (currentValue.includes('tan')) {
      document.getElementById('result').value = Math.tan(parseFloat(currentValue.replace('tan', '')));
    } else if (currentValue.includes('log')) {
      document.getElementById('result').value = Math.log10(parseFloat(currentValue.replace('log', '')));
    } else if (currentValue === 'π') {
      document.getElementById('result').value = Math.PI;
    } else {
      document.getElementById('result').value = eval(currentValue); // Evaluate regular expressions like 2+2
    }
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

// Clear the current entry in the display
function clearEntry() {
  document.getElementById('result').value = '';
}

// Scientific functions
function sinFunction() {
  let currentValue = document.getElementById('result').value;
  // If the display is empty, append 'sin' to start the expression
  if (!currentValue) {
    document.getElementById('result').value = 'sin';
  } else {
    document.getElementById('result').value = `sin(${currentValue})`;
  }
}

function cosFunction() {
  let currentValue = document.getElementById('result').value;
  // If the display is empty, append 'cos' to start the expression
  if (!currentValue) {
    document.getElementById('result').value = 'cos';
  } else {
    document.getElementById('result').value = `cos(${currentValue})`;
  }
}

function tanFunction() {
  let currentValue = document.getElementById('result').value;
  // If the display is empty, append 'tan' to start the expression
  if (!currentValue) {
    document.getElementById('result').value = 'tan';
  } else {
    document.getElementById('result').value = `tan(${currentValue})`;
  }
}

function logFunction() {
  let currentValue = document.getElementById('result').value;
  // If the display is empty, append 'log' to start the expression
  if (!currentValue) {
    document.getElementById('result').value = 'log';
  } else {
    document.getElementById('result').value = `log(${currentValue})`;
  }
}

function storeMemory() {
  let currentValue = document.getElementById('result').value;
  memory = parseFloat(currentValue);
  document.getElementById('result').value = 'Stored';
}

function recallMemory() {
  document.getElementById('result').value = memory;
}

function clearMemory() {
  memory = 0;
  document.getElementById('result').value = 'Memory Cleared';
}

function addToMemory() {
  let currentValue = document.getElementById('result').value;
  memory += parseFloat(currentValue);
  document.getElementById('result').value = 'Added to Memory';
}

function subtractFromMemory() {
  let currentValue = document.getElementById('result').value;
  memory -= parseFloat(currentValue);
  document.getElementById('result').value = 'Subtracted from Memory';
}
