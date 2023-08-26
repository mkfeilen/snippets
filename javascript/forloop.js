const str = "xyz";
const strArr = ["a", "b", "c"];
const obj = {"field1": 1, "field2": 2, "field3": 3};
const objArr = [{"field1": 1, "field2": "a"}, {"field1": 2, "field2": "b"}];

const dummy_set = new Set();
dummy_set.add("a");
dummy_set.add("b");
dummy_set.add("c");

const dummy_map = new Map();
dummy_map.set("key1", 1);
dummy_map.set("key2", 2);
dummy_map.set("key3", 3);

console.log("========== str")
console.log("===== e in str")
for(e in str) {
    console.log("e :", e);
    console.log("str[e]:", str[e]);
}

console.log("===== e of str")
for(e of str) {
    console.log(e);
}

console.log("===== let i=0; i < str.length ; i++")
for(let i=0; i < str.length ; i++) {
    console.log("i: ", i);
    console.log("str[i]: ", str[i]);
}

console.log("========== strArr")
console.log("===== e in strArr")
for(e in strArr) {
    console.log("e :", e);
    console.log("strArr[e]:", strArr[e]);
}

console.log("===== e of strArr")
for(e of strArr) {
    console.log(e);
}

console.log("===== let i=0; i < strArr.length ; i++")
for(let i=0; i < strArr.length ; i++) {
    console.log("i: ", i);
    console.log("strArr[i]: ", strArr[i]);
}

// Coding practice
// print the followings in three different ways like above
// obj, objArr
console.log("======= e in obj")
for(const key in obj){
   if(obj.hasOwnProperty(key)){
    console.log(`${key}: ${obj[key]}`);
   }
}


console.log("======= e of obj")
let entries = Object.entries(obj);
for(array of entries){
    console.log(array);
} 

console.log("======== e let i=0")
let keys = Object.keys(obj);
for(let i=0; i < keys.length ; i++){
    console.log("key: ", keys[i]);
    console.log("obj[i]:", obj[keys[i]]);
}

console.log("======== map")
console.log(dummy_map.entries());
console.log(dummy_map.keys());
console.log(dummy_map.size);
console.log(dummy_map.values());





