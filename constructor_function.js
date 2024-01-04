function BankAccount(customerName, balance= 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.deposit = function (deposit) {
        this.balance += deposit;
    }

    this.withdraw = (withdraw) => { 
        this.balance -= withdraw;
    }
}

const accounts = [];

const accountForm = document.getElementById('accountForm');
const customerName = document.getElementById('customerName');
const balance = document.getElementById('balance');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});

const depositeForm = document.getElementById('depositeForm');
const accountNumber = document.getElementById('accountNumber');
const amount = document.getElementById('amount');

depositeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(account => account.accountNumber === +accountNumber.value);
    account.deposit(+amount.value);
    console.log(account);
});