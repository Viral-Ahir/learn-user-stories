import Bank from "../src/bank";

//setup
const bank = new Bank();

//story 1 - scenario 1
const account = bank.createAccount("John Doe", 29, "352656");
if (account.accountNumber === "352656") {
  console.log("Story 1 - Scenario 1 passed");
} else {
  console.log("Story 1 - Scenario 1 failed");
}

//story 1 - scenario 2
try {
  bank.createAccount("John Doe", 29, "352656");
  console.log("Story 1 - Scenario 2 failed");
} catch (_) {
  console.log("Story 1 - Scenario 2 passed");
}

//story 2 - scenario 1
try {
  bank.deposit("352656", 100);
  console.log("Story 2 - Scenario 1 passed");
} catch (_) {
  console.log("Story 2 - Scenario 1 failed");
}

//story 2 - scenario 2
try {
  bank.deposit("1111111", 100);
  console.log("Story 2 - Scenario 2 failed");
} catch (_) {
  console.log("Story 2 - Scenario 2 passed");
}

//story 2 - scenario 3
try {
  bank.deposit("352656", -100);
  console.log("Story 2 - Scenario 3 failed");
} catch (_) {
  console.log("Story 2 - Scenario 3 passed");
}
