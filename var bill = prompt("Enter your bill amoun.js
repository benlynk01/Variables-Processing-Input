var bill = prompt("Enter your bill amount:");

var bill = Number(bill);

var taxedBill = bill * 1.07;

var tip = taxedBill * 0.15;

var finalBill = taxedBill + tip;

console.log("Final bill total: $" + finalBill);