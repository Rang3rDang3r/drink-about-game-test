describe("My whatCanIDrink function", function(){

    /* What it does */
    describe("checks age", function(){
        it("should exist", function(){

        /* Checks to see if action being performed is correct */
            expect(whatCanIDrink) .toBeDefined();
        })
        /* Repeat process for each variable */
        it("should return result Drink Toddy called as whatCanIDrink(13)", function(){
            var result= whatCanIDrink(13);
            expect(result) .toBe("Drink Toddy");
        })
    })
})