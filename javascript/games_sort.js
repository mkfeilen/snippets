const stringArr = [ 'b', 'a', 'c'];
const objArr = [{"field1": "b", "field2": 5}, {"field1": "c", "field2": 1}, {"field1": "a", "field2": 3}]

//1. sort array stringArr in ascending

let sortedString = stringArr.sort();
console.log("sortedString: ", sortedString);

//2. sort arry objArr by field 1 ascending

/* function compareField1Asc(a,b){
    return a.field1 < b.field1 ? -1 : a.field1 > b.field1? 1 : 0
}
console.log(compareField1Asc(objArr)); */

function compareField1(a, b){
    if (a.field1 < b.field1){
        return -1;
    } else if (a.field1 > a.field1){
        return +1;
    } 
    return 0;
}
let sortedArr = objArr.sort(compareField1);
console.log("sortedArr: ", sortedArr);

//dummy_games.sort(compareField1)

let sortedField1 = objArr.sort(
    (a, b) => (a.field1 < b.field1) ? -1 :(a.field1 > b.field1) ? 1 :0
);
console.log("sortedField1: ", sortedField1)

// 4. sort array by field1 descending
let sortedDescField1 = objArr.sort(
    (a, b) => (a.field1 < b.field1) ? 1 : (a.field1 > b.field1) ? -1 : 0
)
console.log("sortedDescField1: ", sortedDescField1)


//6. make a function to do the sorting based on a field
function sortAsc(array, field){
    let sortedAsc = array.sort((a, b) => (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0);
    return sortedAsc
}

console.log("sortAsc by field1: ", sortAsc(objArr, "field1"));
console.log("sortAsc by field2: ", sortAsc(objArr, "field2"));

// 7. make a function to do the sorting descending based on a field

function sortDesc(array, field){
    let sortedDesc = array.sort((a, b) => (a[field] < b[field]) ? 1 : (a[field] > b[field]) ? -1 : 0);
    return sortedDesc;
}
console.log("sortedDesc by field 1 ", sortDesc(objArr, "field1"));
console.log("sortedDesc by field 2", sortDesc(objArr, "field2"));