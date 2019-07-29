class BookingTour {

  get conatainer() { return $('.booking-step-1'); }

  get pass1SalutationM() { return $('.passenger-01').$('label=de heer').$('.radio'); }

  get pass1FirstNameInput() { return $('[name="passenger-01_name-first"]'); }

  get pass1LastNameInput() { return $('[name="passenger-01_name-last"]'); }

  get pass1DayOfBirthSelector() { return $('[name="passenger-01_name-birthdate-1"]'); }

  get pass1MonthOfBirthSelector() { return $('[name="passenger-01_name-birthdate-2"]'); }

  get pass1YearOfBirthSelector() { return $('[name="passenger-01_name-birthdate-3"]'); }

  get pass2SalutationF() { return $('.passenger-02').$('label=mevrouw').$('.radio'); }

  get pass2FirstNameInput() { return $('[name="passenger-02_name-first"]'); }

  get pass2LastNameInput() { return $('[name="passenger-02_name-last"]'); }

  get pass2DayOfBirthSelector() { return $('[name="passenger-02_name-birthdate-1"]'); }

  get pass2MonthOfBirthSelector() { return $('[name="passenger-02_name-birthdate-2"]'); }

  get pass2YearOfBirthSelector() { return $('[name="passenger-02_name-birthdate-3"]'); }

  get postcodeInput() { return $('[name="passenger-01_address-postcode"]'); }

  get houseNumberInput() { return $('[name="passenger-01_address-number"]'); }

  get streetInput() { return $('[name="passenger-01_address-street"]'); }

  get cityInput() { return $('[name="passenger-01_address-city"]'); }

  get primaryEmailInput() { return $('[name="passenger-01_email"]'); }

  get primaryPhoneInput() { return $('[name="passenger-01_telephone-primary"]'); }

  get ECnameInput() { return $('[name="stay-home_name"]'); }

  get ECemailInput() { return $('[name="stay-home_email"]'); }

  get ECphoneInput() { return $('[name="stay-home_tel"]'); }

  get submitBtn() { return $('.booking-footer.hidden-on-mobile .btn.primary'); }

  get verificationCheckboxes() { return $$('.options-list__label'); }

  get dataCorrectBtn() { return $('.btn.btn--theme--primary.btn--large'); }

  get loader() { return $('.loader-overlay'); }

  filloutTourInfo(data) {
    this.pass1SalutationM.click();
    this.pass1FirstNameInput.setValue(data.pass1.firstName);
    this.pass1LastNameInput.setValue(data.pass1.lastName);
    this.pass1DayOfBirthSelector.click();
    this.pass1DayOfBirthSelector.$(`[value="${data.pass1.dayOfBirth}"]`).click();
    this.pass1MonthOfBirthSelector.click();
    this.pass1MonthOfBirthSelector.$(`[value="${data.pass1.monthOfBirth - 1}`).click();
    this.pass1YearOfBirthSelector.click();
    this.pass1YearOfBirthSelector.$(`[value="${data.pass1.yearOfBirth}`).click();
    this.pass2SalutationF.click();
    this.pass2FirstNameInput.setValue(data.pass2.firstName);
    this.pass2LastNameInput.setValue(data.pass2.lastName);
    this.pass2DayOfBirthSelector.click();
    this.pass2DayOfBirthSelector.$(`[value="${data.pass2.dayOfBirth}"]`).click();
    this.pass2MonthOfBirthSelector.click();
    this.pass2MonthOfBirthSelector.$(`[value="${data.pass2.monthOfBirth - 1}`).click();
    this.pass2YearOfBirthSelector.click();
    this.pass2YearOfBirthSelector.$(`[value="${data.pass2.yearOfBirth}`).click();
    this.postcodeInput.setValue(data.postcode);
    this.houseNumberInput.setValue(data.house);
    this.streetInput.setValue(data.street);
    this.cityInput.setValue(data.city);
    this.primaryEmailInput.setValue(data.email);
    this.primaryPhoneInput.setValue(data.phone);
    this.ECnameInput.setValue(data.EC.name);
    this.ECphoneInput.setValue(data.EC.phone);
    this.loader.waitForDisplayed(5000, true);
    this.submitBtn.click();
  }
}

module.exports = new BookingTour();
