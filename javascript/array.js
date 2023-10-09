//various array methods and what hey do

const arr = ['grape', 'kiwi', 'melon', 'apple', 'banana'];
arr.splice(2, 0, 'cherry');
console.log(arr);

arr.splice(7,1, 'orange');
console.log(arr);

arr.push('grapefruit');
// this shows that if index is larger than array, adds at end
arr.splice(100,0, 'courgette');
console.log(arr);
//negatives are not recognised with splice and will treat value as positive
arr.splice(-5, 1, 'tangerine');
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift('apple');
console.log(arr);

arr.splice(1,2);
console.log(arr);

arr.splice(1);
console.log(arr);

// this is to show that the different methods provide the same results
const arr2 = ["ab", "bcd", "defg", "eg"];

function findLongE(e){
    return e.includes("e") && e.length >3;
}

const find4E = (e) => e.includes("e") && e.length >3;

const find4E2 = (e) => {
    return e.includes("e") && e.length >3
};

console.log(arr2.find(findLongE));
console.log(arr2.find(find4E));
console.log(arr2.find(find4E2));