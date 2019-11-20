/* Sets function */

whatCanIDrink = function(age){

/*Set parameters */
    if (age <= 0) {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }   
    else if ((age >0) && (age <=13)) {
        return "Drink Toddy";
    }
    else if ((age >13) && (age <=17)) {
        return "Drink Coke";
    }
    else if ((age >17) && (age <=21)) {
        return "Drink Beer";
    }
    else if ((age > 21) && (age <=130)) {
        return "Drink Whiskey";
    }
};
