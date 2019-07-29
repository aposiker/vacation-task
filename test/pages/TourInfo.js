class TourInfo {
  get checkPriceBtn() { return $('[data-cy="price-check-button"]>.btn'); }

  get warningMessage() { return $('.message-box.message-warning'); }

  get otherPossibleDate() { return $('[data-cy="barchart-offers"] > .left'); }

  get bookNowBtn() { return $('#offer-receipt-bookbutton'); }

  get priseCheckMessage() { return $('[data-cy="price-check-message"]'); }

  checkToursPrice() {
    this.checkPriceBtn.click();
    this.priseCheckMessage.waitForDisplayed(10000, true);
  }

  selectOtherAvailableDepDate() {
    this.otherPossibleDate.click();
    this.priseCheckMessage.waitForDisplayed(10000, true);
  }

  bookNow() {
    this.bookNowBtn.click();
  }
}
module.exports = new TourInfo();
