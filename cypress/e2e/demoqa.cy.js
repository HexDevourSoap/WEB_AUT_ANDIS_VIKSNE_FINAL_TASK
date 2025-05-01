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
    
  });


})