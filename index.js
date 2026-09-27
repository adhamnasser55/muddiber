// Initial account balance
let balance = 1000;

// Display menu options to the user
const choice = prompt(
  "Select an operation:\n1. Check Balance\n2. Withdraw\n3. Deposit"
);

switch (choice) {
  case "1":
    console.log(`Your current balance is: $${balance.toFixed(2)}`);
    break;

  case "2": {
    const withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      console.log("Invalid amount.");
    } else if (withdrawAmount > balance) {
      console.log("Insufficient funds!");
    } else {
      balance -= withdrawAmount;
      console.log(`Successfully withdrew $${withdrawAmount.toFixed(2)}.`);
      console.log(`Remaining balance: $${balance.toFixed(2)}`);
    }
    break;
  }

  case "3": {
    const depositAmount = parseFloat(prompt("Enter amount to deposit:"));

    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Invalid amount.");
    } else {
      balance += depositAmount;
      console.log(`Successfully deposited $${depositAmount.toFixed(2)}.`);
      console.log(`New balance: $${balance.toFixed(2)}`);
    }
    break;
  }

  default:
    console.log("Invalid operation selected.");
}