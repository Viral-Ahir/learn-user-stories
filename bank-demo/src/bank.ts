// Indicates the type for all bank account in the bank class
interface BankAccount {
  name: string;
  age: number;
  accountNumber: string;
  balance: number;
}

/*
 * Bank class that manages bank accounts in the bank
 */
export default class Bank {
  // Array of all bank accounts in the bank
  private accounts: BankAccount[] = [];

  /**
   * Method to find an account in the bank
   * @param {string}accountNumber -- Account number to find in the bank
   * @returns -- Bank account if found, otherwise undefined
   */
  private findAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );
  }

  /**
   * Method to create a new bank account
   * @param {string} name -- Name of the account holder
   * @param {number} age -- Age of the account holder
   * @param {string} accountNumber -- Account number of the account holder
   * @returns -- Bank account created
   */
  public createAccount(
    name: string,
    age: number,
    accountNumber: string
  ): BankAccount {
    const isAccountExist = this.findAccount(accountNumber);
    if (isAccountExist) {
      throw new Error("Account already exists");
    }
    const account = {
      name,
      age,
      accountNumber,
      balance: 0,
    };
    this.accounts.push(account);
    return account;
  }

  /**
   * Method to deposit money into a bank account
   * @param {string} accountNumber -- Account number to deposit money into
   * @param {number} amount -- Amount to deposit
   * @returns -- Bank account with updated balance
   */
  public deposit(accountNumber: string, amount: number): BankAccount {
    const account = this.findAccount(accountNumber);
    if (!account) {
      throw new Error("Account does not exist");
    }
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
    account.balance += amount;
    return account;
  }

  /**
   * Method to withdraw money from a bank account
   * @param {string} accountNumber -- Account number to withdraw money from
   * @param {number} amount -- Amount to withdraw
   * @returns -- Bank account with updated balance
   */
  public withdraw(accountNumber: string, amount: number): BankAccount {
    const account = this.findAccount(accountNumber);
    if (!account) {
      throw new Error("Account does not exist");
    }
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
    if (account.balance < amount) {
      throw new Error("Insufficient balance");
    }
    account.balance -= amount;
    return account;
  }

  /**
   * Method to check balance of a bank account
   * @param {string} accountNumber -- Account number to check balance
   * @returns -- Balance of the account
   */
  public checkBalance(accountNumber: string): number {
    const account = this.findAccount(accountNumber);
    if (!account) {
      throw new Error("Account does not exist");
    }
    return account.balance;
  }
}
