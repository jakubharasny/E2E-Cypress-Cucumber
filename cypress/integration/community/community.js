import { Before, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
 
Given('I login', () => {
  cy.pause()
  cy.visit('');

  cy.get('#user_login_name').type('')
  cy.get('#user_password').type('')
  cy.contains('Sign in').click()
  cy.contains('Accept').click()
});

When('I created Community', () => {
    cy.get('.b-topbar-sidemenu-link-button').click()
    cy.contains('Admin').click()
    cy.contains('New community').click()
  });

Then('Community is created', () => {
  cy.get('.b-community-name-input').type('cypress community')
  cy.get('.b-community-description-input').type('cypress test')
  cy.contains('Create Community').click()
  cy.get('.b-back-button-icon').click()
  cy.get('.b-back-button-icon').click()
  cy.expect('h2.b-name').to.have.text('cypress community')
  cy.pause()
});