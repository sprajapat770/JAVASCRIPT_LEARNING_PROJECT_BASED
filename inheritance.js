// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function(deposit) {
//     this.balance += deposit;
// }

// BankAccount.prototype.withdraw = function(withdraw) {
//         this.balance -= withdraw;
// }


// function CurrentAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// // CurrentAccount.prototype.takeBusinesslLoan = function(amount) {
// //     console.log('personal loan', amount);
// // }

// // CurrentAccount.prototype.deposit = function(deposit) {
// //     this.balance += deposit;
// // }

// // CurrentAccount.prototype.withdraw = function(withdraw) {
// //         this.balance -= withdraw;
// // }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// function SavingAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takePersonalLoan = function(amount) {
//     console.log('personal loan', amount);
// }

// SavingAccount.prototype.deposit = function(deposit) {
//     this.balance += deposit;
// }

// SavingAccount.prototype.withdraw = function(withdraw) {
//         this.balance -= withdraw;
// }


class BankAccount {
    balance;
    customerName;
    accountNumber;
    
    constructor(customerName, balance = 0) {
        this.balance = balance;
        this.customerName = customerName;
        this.accountNumber = Date.now();
    }

    deposit(deposit) {
        this.balance += deposit;
    }

    withdraw(withdraw) {
        this.balance -= withdraw;
    }
}

class CurrentAccount extends BankAccount {
    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    takeBusinessLoan(amount) { 
        console.log("takeBusinessLoan",amount); 
    }

}

class SavingAccount extends BankAccount {
    constructor(customerName,balance = 0) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log("takePersonalLoan",amount);
    }
}


const rakeshAccount = new SavingAccount("Rakesh K ", 1000);
const vikramAccount = new CurrentAccount("Vikram", 2000);