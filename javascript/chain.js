const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let x = arr.filter((e) => e > 2 && e < 8);
//console.log(x);


function compareAsc(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

function compareDesc(a, b) {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
}

x.sort(compareDesc);

//console.log(x);

//you can keep chaining on methods as long as the return something
//if they don't return something that method should be on a separate line

const y = arr.filter((e) => e > 2 && e < 8)
             .sort(compareDesc)
             .sort()
             .toString();


console.log(y);



