class BankAccount {
    #balance;
    customerName;
    accountNumber;
    
    constructor(customerName, balance = 0) {
        this.#balance = balance;
        this.customerName = customerName;
        this.accountNumber = Date.now();
    }

    deposit(deposit) {
        this.#balance += deposit;
    }

    withdraw(withdraw) {
        this.#balance -= withdraw;
    }

    // setBalance(balance) {
    //     if(isNaN(balance) ){
    //         throw new Error('balance must be valid');
    //     }
    //     this.#balance = balance;
    // }

    // getBalance() {
    //     return this.#balance;
    // }

    set balance(balance) {
        if(isNaN(balance) ){
            throw new Error('balance must be valid');
        }
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }
      
}

class CurrentAccount extends BankAccount {
    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    #calculateInterest(){
        console.log('calculateInterest ');
    }

    takeBusinessLoan(amount) { 
        this.#calculateInterest();
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

// vikramAccount.#balance = 'hello'