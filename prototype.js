function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    // this.deposit = function (deposit) {
    //     this.balance += deposit;
    // }

    // this.withdraw = (withdraw) => { 
    //     this.balance -= withdraw;
    // }
}


BankAccount.prototype.deposit = function(deposit) {
    this.balance += deposit;
}

BankAccount.prototype.withdraw = function(withdraw) {
        this.balance -= withdraw;
}



//1. prototype chain advantage