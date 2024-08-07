import HomePage from "../pages/HomePage"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
  })

  it('Validate Home Page Load', () => {
    homePage.verifyHomePageLoaded()
  })

  it('Verify User Registration', () => {
    homePage.enterUserDetails()
    homePage.verifyUserDataSubmissionIsSuccessful()
  })

  it('Verify Copyright text on Home Page', () => {
    homePage.verifyCopyrightTextIsDisplayed()
  })
})

const homePage = new HomePage()