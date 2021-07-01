function createAccount(pin, amount = 0) {
    this.pin = pin;
    this.amount = amount;

    return {
        checkBalance(userPin) {
            if (userPin === pin) {
                return `$${amount}`;
            } else {
                return 'Invalid PIN.';
            }
        },
        deposit(userPin, dep) {
            if (userPin === pin) {
                amount += dep;
                return `Successfully deposited $${dep}. Current balance: $${amount}.`;
            } else {
                return 'Invalid PIN.';
            }
        },
        withdraw(userPin, am) {
            if (userPin === pin) {
                if (am > amount) return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
                amount -= am;
                return `Successfully withdrew $${am}. Current balance: $${amount}.`;
            } else {
                return 'Invalid PIN.';
            }
        },
        changePin(old, toNew) {
            if (old === pin) {
                pin = toNew;
                return `PIN successfully changed!`;
            } else {
                return 'Invalid PIN.';
            }
        }
    }
}
let account = createAccount('1234', 500);
account.checkBalance('1234');
account.checkBalance('blah');

module.exports = { createAccount };
