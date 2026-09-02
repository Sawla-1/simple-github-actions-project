/// Pure functions (easily testable with CI/CD scripts)
function formatGreeting(name) {
  if (!name || name.trim() === "") {
    return "Hello, Developer!";
  }
  return `Hello, ${name.trim()}! Welcome to GitHub Actions.`;
}

function calculateSum(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid numbers provided");
  }
  return numA + numB;
}

// Export for Node.js test environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = { formatGreeting, calculateSum };
}

// DOM Event Listeners (runs only in the browser)
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const greetBtn = document.getElementById("greetBtn");
    const greetMessage = document.getElementById("greetMessage");
    const numA = document.getElementById("numA");
    const numB = document.getElementById("numB");
    const calcBtn = document.getElementById("calcBtn");
    const calcResult = document.getElementById("calcResult");

    greetBtn.addEventListener("click", () => {
      greetMessage.textContent = formatGreeting(nameInput.value);
    });

    calcBtn.addEventListener("click", () => {
      try {
        const total = calculateSum(numA.value, numB.value);
        calcResult.textContent = `Total: ${total}`;
      } catch (err) {
        calcResult.textContent = "Error: Please enter valid numbers.";
      }
    });
  });
}
