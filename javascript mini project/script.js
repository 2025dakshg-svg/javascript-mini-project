let pin = "1234";
let balance = 7000;

let input = "";
let loggedIn = false;
let mode = "pin";   

const display = document.getElementById("display");

function press(num) {
  input += num;
  display.innerText = input;
}

function clearInput() {
  input = "";
  display.innerText = "";
}

function enter() {

  if (mode === "pin") {

    if (input === pin) {
      loggedIn = true;
      mode = "menu";
      showMenu();
    } else {
      display.innerText = "Wrong PIN ";
    }

    input = "";
  }


  else if (mode === "withdraw") {

    let amount = parseInt(input);

    if (!amount) {
      display.innerText = "Enter amount";
      return;
    }

    if (amount > balance) {
      display.innerText = "Insufficient balance";
    } else {
      balance -= amount;
      display.innerText =
        "Withdrawn: ₹" + amount +
        "\nBalance: ₹" + balance;
    }

    input = "";
    mode = "menu";
  }


  else if (mode === "deposit") {

    let amount = parseInt(input);

    if (!amount) {
      display.innerText = "Enter amount";
      return;
    }

    balance += amount;

    display.innerText =
      "Deposited: ₹" + amount +
      "\nBalance: ₹" + balance;

    input = "";
    mode = "menu";
  }
}

function showMenu() {
  display.innerHTML = `
    Select Option:
    
    <button onclick="startWithdraw()">Withdraw</button>
    <button onclick="startDeposit()">Deposit</button>
    <button onclick="showBalance()">Balance</button>
  `;
}

function startWithdraw() {
  mode = "withdraw";
  display.innerText = "Enter amount to withdraw:";
}

function startDeposit() {
  mode = "deposit";
  display.innerText = "Enter amount to deposit:";
}

function showBalance() {
  display.innerText = "Balance: ₹" + balance;
}

function goBack() {

  if (!loggedIn) {
    input = "";
    display.innerText = "Enter PIN to continue";
    return;
  }

  mode = "menu";
  showMenu();
}