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
}
