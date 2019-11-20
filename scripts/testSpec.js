describe("My whatCanIDrink function", function(){

    /* What it does */
    describe("checks age", function(){
        it("should return a result of - Sorry. I can’t tell what drink because that age is incorrect!", function(){

        /* Checks to see if action being performed is correct */
            expect(whatCanIDrink) .toBeDefined();
        })
        /* Repeat process for each variable */
        it("should return result Drink Toddy called as whatCanIDrink(13)", function(){
            var result= whatCanIDrink(13);
            expect(result) .toBe("Drink Toddy");
        })
        it("should return result Drink Coke called as whatCanIDrink(17)", function(){
            var result= whatCanIDrink(17);
            expect(result) .toBe("Drink Coke");
        })
        it("should return result Drink Beer called as whatCanIDrink(20)", function(){
            var result= whatCanIDrink(20);
            expect(result) .toBe("Drink Beer");
        })
        it("should return result Drink Whiskey called as whatCanIDrink(129)", function(){
            var result= whatCanIDrink(129);
            expect(result) .toBe("Drink Whiskey");
        })
    })
})