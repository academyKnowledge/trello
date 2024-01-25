class CreateNewCardAssertions {
    checkCardIsExist(){
        cy.findByTestId("trello-card").should("exist")
        return this;
    }
    checkCardIsContain(cardName){
        cy.findByTestId("trello-card").should("contain",cardName)
        return this;
    }
}
export default CreateNewCardAssertions;