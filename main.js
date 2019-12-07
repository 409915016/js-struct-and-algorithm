import Dictionary from "./src/dictionary"
import HashTable from './src/hash_table_separate_chaining'
import HashLinearProbing from './src/hash_linear_probing'
//字典
var dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

// console.log(dictionary.has('Gandalf'));   
// console.log(dictionary.size());  

// console.log(dictionary.keys()); 
// console.log(dictionary.values()); 
// console.log(dictionary.get('Tyrion')); 

// dictionary.delete('John');

// console.log(dictionary.keys()); 
// console.log(dictionary.values());

// console.log(dictionary.getItems());

let hashTableSeparateChaining = new HashTable()
// hashTableSeparateChaining.put('Gandalf', 'gandalf@email.com');
// hashTableSeparateChaining.put('John', 'johnsnow@email.com');
// hashTableSeparateChaining.put('Tyrion', 'tyrion@email.com');
// hashTableSeparateChaining.put('Aaron', 'aaron@email.com');
// hashTableSeparateChaining.put('Donnie', 'donnie@email.com');
// hashTableSeparateChaining.put('Ana', 'ana@email.com');
// hashTableSeparateChaining.put('Jonathan', 'jonathan@email.com');
// hashTableSeparateChaining.put('Jamie', 'jamie@email.com');
// hashTableSeparateChaining.put('Sue', 'sue@email.com');
// hashTableSeparateChaining.put('Mindy', 'mindy@email.com');
// hashTableSeparateChaining.put('Paul', 'paul@email.com');
// hashTableSeparateChaining.put('Nathan', 'nathan@email.com');

// console.log('**** Printing Hash **** ');

// hashTableSeparateChaining.print();

// console.log('**** Get **** ');

// console.log(hashTableSeparateChaining.get('Jamie'));
// console.log(hashTableSeparateChaining.get('Sue'));
// console.log(hashTableSeparateChaining.get('Jonathan'));
// console.log(hashTableSeparateChaining.get('Loiane'));

// console.log('**** Remove **** ');

// console.log(hashTableSeparateChaining.remove('Gandalf'));
// console.log(hashTableSeparateChaining.get('Gandalf'));
// hashTableSeparateChaining.print();

// console.log(hashTableSeparateChaining.remove('Sue'));
// hashTableSeparateChaining.print();

// console.log(hashTableSeparateChaining.remove('Jamie'));
// hashTableSeparateChaining.print();

// console.log(hashTableSeparateChaining.remove('Donnie'));
// hashTableSeparateChaining.print();

var hashLinearProbing = new HashLinearProbing();

hashLinearProbing.put('Gandalf', 'gandalf@email.com');
hashLinearProbing.put('John', 'johnsnow@email.com');
hashLinearProbing.put('Tyrion', 'tyrion@email.com');
hashLinearProbing.put('Aaron', 'aaron@email.com');
hashLinearProbing.put('Donnie', 'donnie@email.com');
hashLinearProbing.put('Ana', 'ana@email.com');
hashLinearProbing.put('Jonathan', 'jonathan@email.com');
hashLinearProbing.put('Jamie', 'jamie@email.com');
hashLinearProbing.put('Sue', 'sue@email.com');
hashLinearProbing.put('Mindy', 'mindy@email.com');
hashLinearProbing.put('Paul', 'paul@email.com');
hashLinearProbing.put('Nathan', 'nathan@email.com');

console.log('**** Printing Hash **** ');

hashLinearProbing.print();

console.log('**** Get **** ');

console.log(hashLinearProbing.get('Nathan'));
console.log(hashLinearProbing.get('Loiane'));

console.log('**** Remove **** ');

hashLinearProbing.remove('Gandalf');
console.log(hashLinearProbing.get('Gandalf'));
hashLinearProbing.print();