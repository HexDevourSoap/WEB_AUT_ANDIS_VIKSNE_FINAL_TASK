import { HomePage } from "../pageObjects/HomePage"
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  it('Finaltask', () => {
    HomePage.firstnameField.type('John')
    HomePage.lastnameField.type('Doe')

    HomePage.emailField.type("demo@gmail.com");
    HomePage.genderField.click();
    HomePage.mobileField.type("3513456789");

    HomePage.dateOfBirthField.click();
    HomePage.dateofBirthYear.select("1990");
    HomePage.dateofBirthMonth.select("October");
    HomePage.dateofBirthDay.click();
    
    HomePage.hobbyButton.click();
    
    HomePage.subjectField.type('Economics');
    HomePage.subjectFieldChoice('Economics').click();

    

    //HomePage.uploadPic.click();


     HomePage.addressField.type("123 Main St, Springfield, USA");
     HomePage.stateButton.type("NCR");
     HomePage.stateButtonChoice.click();
    
     HomePage.cityButton.type("Delhi");
     HomePage.cityButtonChoice.click(); 
      
     HomePage.submitButton.click();
    
     HomePage.validateStudent
    .should('be.visible')
    .and('have.text', 'John Doe');

    HomePage.validateEmail
    .should('be.visible')
    .and('have.text', 'demo@gmail.com');

    HomePage.validateGender
    .should('be.visible')
    .and('have.text', 'Male');

    HomePage.validateMobile
    .should('be.visible')
    .and('have.text', '3513456789');
     
    HomePage.validateDateOfBirth
    .should('be.visible')
    .and('have.text', '04 October,1990');

    HomePage.validateSubject
    .should('be.visible')
    .and('have.text', 'Economics');

    HomePage.validateHobby
    .should('be.visible')
    .and('have.text', 'Music');

    HomePage.validateAddress
    .should('be.visible')
    .and('have.text', '123 Main St, Springfield, USA');

    HomePage.validateStateAndCity
    .should('be.visible')
    .and('have.text', 'NCR Delhi');














  });


})