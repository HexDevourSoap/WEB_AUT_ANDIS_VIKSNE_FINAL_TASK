import { BasePage}  from "./BasePage.js";
export class HomePage extends BasePage {
    static get url() {
        return "/#/";
    }
    static get firstnameField() {
        return cy.get("#firstName");
      }
    
    static get lastnameField() {
        return cy.get("#lastName");
      }

      static get emailField(){
        return cy.get("#userEmail");
      }
        static get genderField(){
            return cy.get("#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label");
        } 
        static get mobileField(){
            return cy.get("#userNumber");
        }  
      
        static get dateOfBirthField(){
            return cy.get("#dateOfBirthInput");
        }
        static get dateofBirthYear(){
            return cy.get("#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__header > div.react-datepicker__header__dropdown.react-datepicker__header__dropdown--select > div.react-datepicker__year-dropdown-container.react-datepicker__year-dropdown-container--select > select");
        }
        static get dateofBirthMonth(){
            return cy.get("#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__header > div.react-datepicker__header__dropdown.react-datepicker__header__dropdown--select > div.react-datepicker__month-dropdown-container.react-datepicker__month-dropdown-container--select > select");
        }
        static get dateofBirthDay(){
            return cy.get("#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(1) > div.react-datepicker__day.react-datepicker__day--004");
        }
        static get subjectField(){
            return cy.get("#subjectsContainer input");
        }
        static subjectFieldChoice(Economics) {
            return cy.get('.subjects-auto-complete__menu').contains(Economics);
          }
        static get closeLardge(){
            return cy.get("#closeLargeModal");
        }

        static get hobbyButton(){
            return cy.get("#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(3) > label");
        }

        // static get uploadPic(){
        //     return cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.png');
        // }

        static get stateButton(){
            return cy.get('#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder');
        }
        
        static get stateButtonChoice(){
            return cy.get('#react-select-3-option-0');
        }
        static get cityButton(){
            return cy.get('#city > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder');
        }
        static get cityButtonChoice(){
            return cy.get('#react-select-4-option-0');
        }

        static get addressField(){
            return cy.get("#currentAddress");
        }
        static get submitButton(){
            return cy.get("#submit");
        }

        static get closeButton(){
            return cy.get("#closeLargeModal");
        }





        static get validateStudent(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(1) > td:nth-child(2)");
        }
    
        static get validateEmail(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        }
        static get validateGender(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(3) > td:nth-child(2)");
        }
        static get validateMobile(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(4) > td:nth-child(2)");
        }
        static get validateDateOfBirth(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(5) > td:nth-child(2)");
        }
        static get validateSubject(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(6) > td:nth-child(2)");
        }
        static get validateHobby(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(7) > td:nth-child(2)");
        }

        static get validateAddress(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(9) > td:nth-child(2)");
        }
        static get validateStateAndCity(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(10) > td:nth-child(2)");
        }
        
        // static get validatePicture(){
        static get validatePicture(){
            return cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > table > tbody > tr:nth-child(8) > td:nth-child(2)");
        }


}