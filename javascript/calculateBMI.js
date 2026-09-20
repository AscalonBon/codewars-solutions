function bmi(weight, height) {

    calc = (weight / height**2);

    if (calc <= 18.5 ){
        return ("Underweight");

    } else if (calc <= 25.0){
        return ("Normal");

    } else if (calc <= 30.0){
        return ("Overweight");

    } else {
        return ("Obese");

    }
}

console.log(bmi(5, 7));