class BankAccount {
    customerName;
    accountNumbe = Date.now();
    balance = 0;

    constructor(customerName, balance){
        this.customerName = customerName;
        this.balance = balance;
    }

    deposit(deposit) {
        this.balance += deposit;
    }

    withdraw(withdraw) { 
        this.balance -= withdraw;
    }

}

const rakeshAccount = new BankAccount("Rakesh K", 1000);
console.log(rakeshAccount);