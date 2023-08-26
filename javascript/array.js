const arr = ['grape', 'kiwi', 'melon', 'apple', 'banana'];
arr.splice(2, 0, 'cherry');
console.log(arr);

arr.splice(7,1, 'orange');
console.log(arr);

arr.push('grapefruit');
arr.splice(100,0, 'courgette');
console.log(arr);

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
