/// <reference types="cypress" />

import {APIKey,APIToken} from "../../support/constants.cy";

class SharedDataUtils {
    createNewBoard = (boardName)=>{
         return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
        }

    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }

}
export default SharedDataUtils;