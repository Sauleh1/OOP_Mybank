#!/usr/bin/env node
// OOP My_Bank
import inquirer from "inquirer";
import randomInteger from "random-int";
class BankDetails {
    BankID;
    BankPIN;
    BankBalance = randomInteger(10000, 2000000);
    constructor(BankID, BankPIN) {
        this.BankID = BankID,
            this.BankPIN = BankPIN;
    }
}
let BanksDetails = new BankDetails(12345, 5544);
let UserID1 = BanksDetails.BankID;
let UserPIN1 = BanksDetails.BankPIN;
let ask = await inquirer.prompt([
    {
        name: "UserID",
        type: "number",
        message: "Please insert userID:"
    }
]);
const { UserID } = ask;
if (UserID) {
    if (UserID === UserID1) {
        console.log("Correct ID!");
        const ask2 = await inquirer.prompt({
            name: "UserPIN",
            type: "number",
            message: "Please enter your PIN:"
        });
        const { UserPIN } = ask2;
        if (UserPIN) {
            if (UserPIN === UserPIN1) {
                const ask3 = await inquirer.prompt([
                    {
                        message: "What do you want to do?",
                        type: "list",
                        choices: [`Cash Withdraw`, `Cash Deposit`, `Check Details`, `Cash Inquirey`, `Convert Money Amount`],
                        name: "What_To_Do_1"
                    }
                ]);
                const { What_To_Do_1 } = ask3;
                if (What_To_Do_1) {
                    if (What_To_Do_1 === "Cash Withdraw") {
                        const AmountLeft_ = await inquirer.prompt([
                            {
                                message: "How much to Withdraw?",
                                type: "list",
                                choices: [`1000`, `2000`, `5000`, `10000`, `20000`, `100000`],
                                name: "Withdraw_Amount"
                            }
                        ]);
                        const { Withdraw_Amount } = AmountLeft_;
                        if (Withdraw_Amount) {
                            if (BanksDetails.BankBalance > Withdraw_Amount) {
                                if (Withdraw_Amount === "1000") {
                                    let MoneyNow1 = BanksDetails.BankBalance - 1000;
                                    console.log(`Rs. 1000 has been taken from your Account! You now have ${MoneyNow1} Rs. left!`);
                                }
                                else if (Withdraw_Amount === "2000") {
                                    let MoneyNow1 = BanksDetails.BankBalance - 2000;
                                    console.log(`Rs. 2000 has been taken from your Account! You now have ${MoneyNow1} Rs. left!`);
                                }
                                else if (Withdraw_Amount === "5000") {
                                    let MoneyNow1 = BanksDetails.BankBalance - 5000;
                                    console.log(`Rs. 5000 has been taken from your Account! You now have ${MoneyNow1} Rs. left!`);
                                }
                                else if (Withdraw_Amount === "10000") {
                                    let MoneyNow1 = BanksDetails.BankBalance - 10000;
                                    console.log(`Rs. 10000 has been taken from your Account! You now have ${MoneyNow1} Rs. left!`);
                                }
                                else if (Withdraw_Amount === "20000") {
                                    let MoneyNow1 = BanksDetails.BankBalance - 20000;
                                    console.log(`Rs. 20000 has been taken from your Account! You now have ${MoneyNow1} Rs. left!`);
                                }
                                else if (Withdraw_Amount === "100000") {
                                    let MoneyNow1 = BanksDetails.BankBalance - 100000;
                                    console.log(`Rs. 100000 has been taken from your Account! You now have ${MoneyNow1} Rs. left!`);
                                }
                            }
                            else {
                                console.log(`Insufficent Bank Balance!`);
                            }
                        }
                    }
                    else if (What_To_Do_1 === "Cash Deposit") {
                        const ask4 = await inquirer.prompt([
                            {
                                message: "Which Account?",
                                type: "list",
                                choices: [`Foreign Account`, `Ruppees Account`],
                                name: "Account_"
                            }
                        ]);
                        const { Account_ } = ask4;
                        if (Account_) {
                            if (Account_ === "Foreign Account") {
                                const askMoney = await inquirer.prompt({
                                    message: "Which currency to Deposit?",
                                    type: "list",
                                    choices: [`Dollar`, `Dinar`, `Riyal`, `Euro`],
                                    name: "Currency101"
                                });
                                const { Currency101 } = askMoney;
                                if (Currency101) {
                                    if (Currency101 === "Dollar") {
                                        const askDollarAmount = await inquirer.prompt({
                                            message: "How many dollars to Deposit?",
                                            type: "number",
                                            name: "Dollar_Amount"
                                        });
                                        const { Dollar_Amount } = askDollarAmount;
                                        if (Dollar_Amount) {
                                            setTimeout(() => {
                                                let Dollars = 0 + Dollar_Amount;
                                                console.log(`${Dollar_Amount} Dollar has been added to your Account. You now have ${Dollars} Dollar in your account!`);
                                            }, 4000);
                                        }
                                    }
                                    else if (Currency101 === `Dinar`) {
                                        const AmountofDinar = await inquirer.prompt([
                                            {
                                                message: "How many dinars To Deposit?",
                                                type: "number",
                                                name: "DinarAmount"
                                            }
                                        ]);
                                        const { DinarAmount } = AmountofDinar;
                                        if (DinarAmount) {
                                            setTimeout(() => {
                                                let Dinars = 0 + DinarAmount;
                                                console.log(`${DinarAmount} Dinar has been added to your account. You now have ${Dinars} Dinar in your account!`);
                                            });
                                        }
                                    }
                                    else if (Currency101 === "Riyal") {
                                        const AmountofRiyal = await inquirer.prompt([
                                            {
                                                message: "How many Riyals To Deposit?",
                                                type: "number",
                                                name: "RiyalAmount"
                                            }
                                        ]);
                                        const { RiyalAmount } = AmountofRiyal;
                                        if (RiyalAmount) {
                                            setTimeout(() => {
                                                let Riyals = 0 + RiyalAmount;
                                                console.log(`${RiyalAmount} Riyal has been added to your account. You now have ${Riyals} Riyal in your account!`);
                                            });
                                        }
                                    }
                                    else if (Currency101 === "Euro") {
                                        const AmountofEuro = await inquirer.prompt([
                                            {
                                                message: "How many Euros To Deposit?",
                                                type: "number",
                                                name: "EuroAmount"
                                            }
                                        ]);
                                        const { EuroAmount } = AmountofEuro;
                                        if (EuroAmount) {
                                            setTimeout(() => {
                                                let Euros = 0 + EuroAmount;
                                                console.log(`${EuroAmount} Euro has been added to your account. You now have ${Euros} Euro in your account!`);
                                            });
                                        }
                                    }
                                }
                            }
                            else if (Account_ === "Ruppees Account") {
                                const askMoney2 = await inquirer.prompt({
                                    message: "How much money to deposit?",
                                    type: "number",
                                    name: "AmountToDeposit"
                                });
                                const { AmountToDeposit } = askMoney2;
                                if (AmountToDeposit) {
                                    setTimeout(() => {
                                        BanksDetails.BankBalance = BanksDetails.BankBalance + AmountToDeposit;
                                        console.log(`Rs. ${AmountToDeposit} has been Added to your Account. Your new Balnce is ${BanksDetails.BankBalance} Rs.`);
                                    }, 6000);
                                }
                            }
                        }
                    }
                    else if (What_To_Do_1 === "Check Details") {
                        const YourBankDetails = {
                            Name: "Mohammad Sauleh",
                            Age: 11,
                            NIC_Number: 43311876,
                            PhoneNumber: 92.3452234147,
                            BankID: BanksDetails.BankID,
                            BankPIN: BanksDetails.BankPIN,
                            BankBalance: BanksDetails.BankBalance
                        };
                        console.log(`Here are your Details:`);
                        console.log(YourBankDetails);
                    }
                    else if (What_To_Do_1 == "Cash Inquirey") {
                        let YourBankBalance = BanksDetails.BankBalance;
                        console.log(`You have ${YourBankBalance} Rs. in your Bank Account!`);
                    }
                    else if (What_To_Do_1 === `Convert Money Amount`) {
                        const Convert_ = await inquirer.prompt([
                            {
                                message: "Currency?",
                                type: "list",
                                choices: [`Foreign Cash To Rs.`, `Rs. to Foreign Cash`],
                                name: "Currency"
                            }
                        ]);
                        const { Currency } = Convert_;
                        if (Currency) {
                            if (Currency === "Foreign Cash To Rs.") {
                                const Currecy_ = await inquirer.prompt([
                                    {
                                        message: "Which currency To Convert Rs.?",
                                        type: "list",
                                        choices: [`Dollar`, `Dinar`, `Riyal`, `Euro`],
                                        name: "Cuurrecy__"
                                    }
                                ]);
                                const { Cuurrecy__ } = Currecy_;
                                if (Cuurrecy__) {
                                    if (Cuurrecy__ === "Dollar") {
                                        const DollarAmountConvert = await inquirer.prompt({
                                            message: "How much Dollar?",
                                            type: "number",
                                            name: "Dollar_Amount"
                                        });
                                        const { Dollar_Amount } = DollarAmountConvert;
                                        if (Dollar_Amount) {
                                            setTimeout(() => {
                                                let Dollars = Dollar_Amount * 302.50;
                                                console.log(`${Dollar_Amount} Dollar to Rs. is ${Dollars}.`);
                                            }, 4000);
                                        }
                                    }
                                    else if (Cuurrecy__ === "Dinar") {
                                        const DinarAmountConvert = await inquirer.prompt({
                                            message: "How much Dinar?",
                                            type: "number",
                                            name: "Dinar_Amount"
                                        });
                                        const { Dinar_Amount } = DinarAmountConvert;
                                        if (Dinar_Amount) {
                                            setTimeout(() => {
                                                let Dinars = Dinar_Amount * 980.53;
                                                console.log(`${Dinar_Amount} Dinar to Rs. is ${Dinars}.`);
                                            }, 4000);
                                        }
                                    }
                                    else if (Cuurrecy__ === "Riyal") {
                                        const EuroAmountConvert = await inquirer.prompt({
                                            message: "How much Riyal?",
                                            type: "number",
                                            name: "Riyal_Amount"
                                        });
                                        const { Riyal_Amount } = EuroAmountConvert;
                                        if (Riyal_Amount) {
                                            setTimeout(() => {
                                                let Riyals = Riyal_Amount * 80.64;
                                                console.log(`${Riyal_Amount} Riyal to Rs. is ${Riyals}.`);
                                            }, 4000);
                                        }
                                    }
                                    else if (Cuurrecy__ === "Euro") {
                                        const EuroAmountConvert = await inquirer.prompt({
                                            message: "How much Euro?",
                                            type: "number",
                                            name: "Euro_Amount"
                                        });
                                        const { Euro_Amount } = EuroAmountConvert;
                                        if (Euro_Amount) {
                                            setTimeout(() => {
                                                let Euros = Euro_Amount * 324.43;
                                                console.log(`${Euro_Amount} Euro to Rs. ${Euros} Euro.`);
                                            }, 4000);
                                        }
                                    }
                                }
                            }
                            else if (Currency === `Rs. to Foreign Cash`) {
                                const Currecy_ = await inquirer.prompt([
                                    {
                                        message: "Which currency To Convert Rs.?",
                                        type: "list",
                                        choices: [`Dollar`, `Dinar`, `Riyal`, `Euro`],
                                        name: "Cuurrecy__"
                                    }
                                ]);
                                const { Cuurrecy__ } = Currecy_;
                                if (Cuurrecy__) {
                                    if (Cuurrecy__ === "Dollar") {
                                        const DollarAmountConvert = await inquirer.prompt({
                                            message: "How much to Dollar?",
                                            type: "number",
                                            name: "Dollar_Amount"
                                        });
                                        const { Dollar_Amount } = DollarAmountConvert;
                                        if (Dollar_Amount) {
                                            setTimeout(() => {
                                                let Dollars = Dollar_Amount / 302.50;
                                                console.log(`${Dollar_Amount} Rs. to Dollar is ${Dollars}.`);
                                            }, 4000);
                                        }
                                    }
                                    else if (Cuurrecy__ === "Dinar") {
                                        const DinarAmountConvert = await inquirer.prompt({
                                            message: "How much to Dinar?",
                                            type: "number",
                                            name: "Dinar_Amount"
                                        });
                                        const { Dinar_Amount } = DinarAmountConvert;
                                        if (Dinar_Amount) {
                                            setTimeout(() => {
                                                let Dinars = Dinar_Amount / 980.53;
                                                console.log(`${Dinar_Amount} Rs. to Dinar is ${Dinars}.`);
                                            }, 4000);
                                        }
                                    }
                                    else if (Cuurrecy__ === "Riyal") {
                                        const EuroAmountConvert = await inquirer.prompt({
                                            message: "How much to Riyal?",
                                            type: "number",
                                            name: "Riyal_Amount"
                                        });
                                        const { Riyal_Amount } = EuroAmountConvert;
                                        if (Riyal_Amount) {
                                            setTimeout(() => {
                                                let Riyals = Riyal_Amount / 80.64;
                                                console.log(`${Riyal_Amount} Rs. to Riyal is ${Riyals}.`);
                                            }, 4000);
                                        }
                                    }
                                    else if (Cuurrecy__ === "Euro") {
                                        const EuroAmountConvert = await inquirer.prompt({
                                            message: "How much to Euro?",
                                            type: "number",
                                            name: "Euro_Amount"
                                        });
                                        const { Euro_Amount } = EuroAmountConvert;
                                        if (Euro_Amount) {
                                            setTimeout(() => {
                                                let Euros = Euro_Amount / 324.43;
                                                console.log(`${Euro_Amount} Rs. to Euro is approx. ${Euros} Euro.`);
                                            }, 4000);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    console.log(`Wrong Password!`);
                }
            }
        }
        else {
            console.log(`Wrong Password!`);
        }
    }
}
// Line of code
// Line of code
// Line of code
// Yay! 400 Linez of code!
