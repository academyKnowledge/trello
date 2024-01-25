import {APIKey,APIToken} from "../../support/constants.cy";

class CreateNewCardActions {

    clickOnAddACardButton(){
        cy.findByTestId("list-add-card-button").first().click();
        return this;
    }

    typeInCardTitleField(cardTitle){
        cy.findByTestId("list-card-composer-textarea").type(cardTitle);
        return this;
    }

    clickOnAddCardButton(){
        // to change the intercept response (body , status code .... ) you can directly change it  
        // cy.intercept("/1/cards",{name:"razanCard"}).as("card")

        // if you want to change the request you should use a call back function with intercept 
        // you have access to req object that represent the intercept request 
        cy.intercept("/1/cards",(req)=>{
           req.body={
           name:"razanCard"}
        }).as("card")

        cy.findByTestId("list-card-composer-add-card-button").first().click();
        
        cy.wait("@card")

        cy.get("@card").then((intercept)=>{
            // You can access details about the intercepted request/response
            // intercept.request 
            // intercept.response
            expect(intercept.request.body.name).to.eql("razanCard");
           // expect(intercept.response.body.name).to.eql("CypressCard");
        })
        return this;

        
    }

}
export default CreateNewCardActions;