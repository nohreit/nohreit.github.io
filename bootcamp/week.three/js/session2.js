// let fahrenheit = 40;
// let celcius = 29;

// console.log(`Faherenheit: ${fahrenheit} => Celcius: ${(fahrenheit - 32) * 5 / 9} C`);
// console.log(`Celcius: ${celcius} => Faherenheit: ${(celcius * 9 / 5) + 32} F`);


// // let age = prompt("How old are you?");

// let birthYear = prompt("What your birth year?");

// let age = 2021 - birthYear;

// const isAdult = age >= 18;

// alert(isAdult ? "You can drive." : `You cannot drive. Wait for ${16-age} year(s).`);

// let str = Number.toString(age);

// console.log(str);

const lucasMass = 10, lucasHeight = 1.69, johnMass = 95, johnHeight = 1.88;

const lucasBMI_1 = lucasMass / lucasHeight ** 2, lucasBMI_2 = lucasMass / (lucasHeight * lucasHeight);

const johnBMI_1 = johnMass / johnHeight ** 2, johnBMI_2 = johnMass / (johnHeight * johnHeight);

const lucasHigherBMI = lucasBMI_1 > johnBMI_1;

// console.log(`Lucas and John are friends, Lucas is ${lucasHeight}m tall and John is ${johnHeight}m tall.
// So John has higher BMI than Lucas, that is ${lucasHigherBMI}.`)

// alert(`Lucas and John are friends, Lucas is ${lucasHeight}m tall and John is ${johnHeight}m tall.
// So John has higher BMI than Lucas, that is ${lucasHigherBMI}.`);

console.log(`Lucas and John are friends, Lucas's BMI is ${lucasBMI_1} and John's BMI is ${johnBMI_1}.`);

if(lucasHigherBMI){
    console.log(`So John has higher BMI than Lucas.`);
    
}else{
    console.log(`So Lucas has higher BMI than John.`);
}

