class Zonvakantie {
  get countrySelector() { return $('#select-destination'); }

  get departureDateSelector() { return $('#select-departure'); }

  get nextMonthBtn() { return $('.monthpicker .nav-right'); }

  get firstDayOfMonth() { return $('.date=1'); }

  get durationSelector() { return $('#select-duration'); }

  get submitBtn() { return $('.btn.primary.box-submit'); }

  selectDestinationCountry(country) {
    this.countrySelector.click();
    $(`a=${country}`).click();
  }

  selectDepartureDate(monthInFuture) {
    this.departureDateSelector.click();
    for (let i = 0; i < monthInFuture; i++) {
      this.nextMonthBtn.click();
    }
    this.firstDayOfMonth.click();
  }

  selectTripDuration(durationInterval) {
    this.durationSelector.click();
    $(`label*=${durationInterval}`).click();
  }

  searchForTrips() {
    this.submitBtn.click();
  }
}
module.exports = new Zonvakantie();
