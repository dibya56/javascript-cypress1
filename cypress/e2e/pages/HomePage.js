class HomePage {

	// Elements

	get homePageTitle() { 
		return cy.get("h1[align='center']").contains("Protractor Tutorial")
	}
	get nameTextField() {
		return cy.get("label").contains("Name").siblings("input[name='name']") 
	}
	get emailTextField() { return cy.get("input[name='email']") }
	get passwordTextField() { return cy.get("input#exampleInputPassword1") }
	get iceCreamLoverCheckBox() { return cy.get("input#exampleCheck1") }
	get genderDropDown() { return cy.get("select#exampleFormControlSelect1") }
	get submitButton() { return cy.get("input[value='Submit']") }
	get formSubmissionSuccessMsg() { 
		return cy
		.get('div.alert-success')
		.contains("Success! The Form has been submitted successfully!.")
	}
	get copyrightText() { return cy.get("p").contains("Copyright") }


	// Actions

	enterUserDetails() {
		cy.fixture('UserDetails').then((data) => {
			this.nameTextField.type(data.name)
			this.emailTextField.type(data.email)
			this.passwordTextField.type("")
			if (data.isIceCreamLover) {
				this.iceCreamLoverCheckBox.check()
			}
			this.genderDropDown.select(data.gender)
		})
		cy.log("User entered the details")
		this.submitButton.click()
	}


	// Verifications

	verifyCopyrightTextIsDisplayed() {
		this.copyrightText.should("be.visible")
		cy.log("Copyright text is displayed on Homepage")
	}
	
	verifyHomePageLoaded() {
		this.homePageTitle.should("be.visible")
		cy.log("Home Page loaded properly")
	}

	verifyUserDataSubmissionIsSuccessful() {
		this.formSubmissionSuccessMsg.should("be.visible")
		cy.log("Form submitted successfully")
	}
}

export default HomePage