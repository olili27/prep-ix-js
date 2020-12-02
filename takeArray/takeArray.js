function takeArray(arr){
    let response = {
        evens:[],
        odds:[],
        chars:[]
    }

    arr.forEach(value => {
        if(typeof value === 'string'){
            response.chars.push(value);
            console.log(response.chars);
        }
        else if(value % 2 === 0){
            response.evens.push(value);
            console.log(response.evens);
        }
        else {
            response.odds.push(value);
            console.log(response.odds);
        }
        
    });
}
takeArray([1,2,3,4,5,6,"hello"]);