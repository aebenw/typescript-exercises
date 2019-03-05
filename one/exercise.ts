type BankAccount = {money: number, deposit: (value:number)=> void}

let bankAccount: {money: number, deposit: (value:number)=> void} = {
    money: 2000,
    deposit: function (value: number) {
        this.money += value;
    }
};

type obj = {name: string, bankAccount: BankAccount, hobbies: string[]}

let myself: obj = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);