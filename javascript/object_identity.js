const original = ['grape', 'kiwi', 'melon', 'apple', 'banana'];

const clone = structuredClone(original);
console.log(clone);

clone.push('bear');
clone.forEach((e) => console.log(e.concat('y')));

const x = clone.map((e) => e.concat('y'));

console.log(original);
console.log(clone);
console.log(x);
