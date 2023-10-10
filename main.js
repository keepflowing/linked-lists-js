import LinkedList from './LinkedList.js';

const myList = new LinkedList;

myList.prepend(100);
myList.append(200);
myList.append(300);
myList.prepend(400);
console.log(myList.toString());

myList.insertAt(500, 1);
console.log(myList.toString());

myList.removeAt(2);
console.log(myList.toString());
// console.log(myList.at(0));
// console.log(myList.size());
// console.log(myList.contains(700));
// console.log(myList.find(700));
// console.log(myList.at(myList.find(700)));

// myList.pop();
