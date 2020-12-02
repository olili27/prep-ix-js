let yearOfBirth = prompt('Year of Birth');

const currentYear = 2020;

let age = currentYear - yearOfBirth;

switch(true){
    case(age < 18):
        console.log('You are a minor');
        break;

    case(age >= 18 && age <= 36):
        console.log('You are a youth');
        break;
    
    default:
        console.log('You are an elder');
        break;
}
