

const arrays =  [1,3,3,8,4,3,2,3,3];


let result = 0;

const length = arrays.length;
for (const key in arrays) {
    const arrays1= arrays.slice(0, key).reduce((a, b)=> a+b, 0);
    const arrays2 = arrays.slice(key, length).reduce((a, b)=> a+b, 0);

    if(arrays1 ===arrays2 ) {
        result = 1;
        break;
    }else{
        result = -1
    };

}

console.log(result)

