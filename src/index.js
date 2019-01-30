import myCurrentLocation, { getGreeting, message, myName } from './myModule';
import addTwoNumbers, { subtractNumbers } from './math';

console.log(message);
console.log(myName);
console.log(myCurrentLocation);
console.log(getGreeting('Travis'));

console.log(addTwoNumbers(5, 10));
console.log(subtractNumbers(20, 12));
