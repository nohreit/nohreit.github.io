/*Create a JavaScript file(link it to an HTML file), and write code for below task:

    Lucas and John are trying to compare their BMI(Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height)(mass in kg
and height in meter).

Your tasks:
1. Store Lucas's and John's mass and height in variables
2. Calculate both their BMIs using the formula(implement both
versions)
3. Create a Boolean variable 'lucasHigherBMI' containing information about
whether Lucas has a higher BMI than John.
4. Use Template Literals to display the Data 2 result(?is a value):
Lucas and John are friends, Lucas is ? m tall and John is ? m tall.
So John has higher BMI than Lucas, that is?.

Test data:
� Data 1: Lucas weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
m tall.
� Data 2: Lucas weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
m tall.*/


const lucasMass = 78, lucasHeight = 1.69, johnMass = 95, johnHeight = 1.88;

const lucasBMI_1 = lucasMass / lucasHeight ** 2, lucasBMI_2 = lucasMass / (lucasHeight * lucasHeight);

const johnBMI_1 = johnMass / johnHeight ** 2, johnBMI_2 = johnMass / (johnHeight * johnHeight);

const lucasHigherBMI = lucasBMI_1 > johnBMI_1;

console.log(`Lucas and John are friends, Lucas is ${lucasHeight}m tall and John is ${johnHeight}m tall.
So John has higher BMI than Lucas, that is ${lucasHigherBMI}.`)

alert(`Lucas and John are friends, Lucas is ${lucasHeight}m tall and John is ${johnHeight}m tall.
So John has higher BMI than Lucas, that is ${lucasHigherBMI}.`);


