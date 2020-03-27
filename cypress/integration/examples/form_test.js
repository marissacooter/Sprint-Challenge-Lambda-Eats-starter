describe ('Test our inputs and submit our form', function () {
    beforeEach(function() {
        cy.visit("http://localhost:3000/pizza");
    });

    const values = ["pepperoni","olives","plain cheese", "meat lovers"]

    it('Add text to input and submit form', function (){
        cy.get("input[data-cy=name]")
            .type("Name Here")
            .should("have.value", "Name Here");
        cy.get("input[data-cy=toppings]")
            .check(values)
            .should("be.checked");
        cy.get("input[data-cy=specInstr]")
            .type("BURN IT")
            .should("have.value", "BURN IT")    
        cy.get("button").click();
    })
})