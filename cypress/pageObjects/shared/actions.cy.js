class ShardActions {
    openBoard(url){
        cy.visit(url);
        return this;
    }
}
export default ShardActions;