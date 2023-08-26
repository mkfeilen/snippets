const objArr = [
    { "name": 'Sena', "age": 20 },
    { "name": 'Annie', "age": 50 },
    { "name": 'Carrie', "age": 40 },
    { "name": 'Marja', "age": 20 },
    { "name": 'Sena', "age": 30 },
    { "name": 'Zavier', "age": 50 },
    { "name": 'Annie', "age": 20 },
    { "name": 'Marja', "age": 10 },
    { "name": 'Carrie', "age": 10 },
    { "name": 'Zavier', "age": 60 },
    { "name": 'Sena', "age": 10 },
    { "name": 'Carrie', "age": 20 },
    { "name": 'Annie', "age": 40 },
    { "name": 'Zavier', "age": 10 },
    { "name": 'Marja', "age": 30 },
]

function nonEqualCompareAsc(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
}

function nonEqualCompareDesc(a, b) {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
}


function sortArr(arr, sortOptions) {

    return arr.sort((obj1, obj2) => {
            // compare every field until one of them is not equal
            for({field, direction} of sortOptions) {
                if("asc" == direction) {
                    let result = nonEqualCompareAsc(obj1[field], obj2[field]);
                    if (result) {
                        return result;
                    }
                } else if ("desc" == direction) {
                    let result = nonEqualCompareDesc(obj1[field], obj2[field])
                    if (result) {
                        return result;
                    }
                }
                
            }

            // if all fields are equal
            return 0; 
        }
    )


}




// Coding practice

// 1. sort objArr by name (asc) and age (asc)
console.log(sortArr(objArr, [{"field": "name", "direction": "asc"}, {"field": "age", "direction": "asc"}]));
// 2. sort objArr by name (asc) and age (desc)
console.log(sortArr(objArr, [{"field": "name", "direction": "asc"}, {"field":"age", "direction": "desc"}]));
// 3. sort objArr by name (desc) and age (asc)
console.log(sortArr(objArr, [{"field":"name", "direction": "desc"}, {"field":"age", "direction":"asc"}]));
// 4. sort objArr by name (desc) and age (desc)
console.log(sortArr(objArr, [{"field":"name", "direction":"desc"}, {"field":"age", "direction":"desc"}]));
// 5. sort objArr by age (asc) and name (asc)
console.log(sortArr(objArr, [{"field":"age", "direction":"asc"}, {"field":"name", "direction":"asc"}]));
// 6. sort objArr by age (asc) and name (desc)
console.log(sortArr(objArr, [{"field":"age", "direction":"asc"}, {"field":"name", "direction":"desc"}]));
// 7. sort objArr by age (desc) and name (asc)
console.log(sortArr(objArr, [{"field":"age", "direction":"desc"}, {"field":"name", "direction":"asc"}]));
// 8. sort objArr by age (desc) and name (desc)
console.log(sortArr(objArr, [{"field":"age", "direction":"desc"}, {"field":"name", "direction":"desc"}]));