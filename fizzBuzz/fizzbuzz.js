function fizzBuzz(str1, str2){
    let sum = str1.length + str2.length;

    if(sum % 3 === 0 && sum % 5 === 0){
        console.log('FizzBuzz');
    }
    else if(sum % 3 === 0){
        console.log('Fizz');
    }
    else if(sum % 5 === 0){
        console.log('Buzz');
    }
    else{
        console.log('Not divisible by both 3 or 5')
    }
}
fizzBuzz('Roland', 'Justin');
