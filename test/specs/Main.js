const { expect } = require('chai');
const Homepage = require('../pages/Homepage');
const Zonvakantie = require('../pages/Zonvakantie');
const SearchResults = require('../pages/SearchResults');
const TourInfo = require('../pages/TourInfo');
const BookingInfo = require('../pages/BookingTour');
const BookingStep3 = require('../pages/BookingStep3');
const data = require('../data');

describe('Happy Flow test', () => {
  let priceNum;
  let priceDec;

  it('should open Homepage and go to Sun Vertical page', () => {
    Homepage.open();
    Homepage.closeCookiesBanner();
    Homepage.selectSunVertical();
    expect(browser.getUrl()).to.equal('https://www.vakantiediscounter.nl/zonvakantie');
  });
  it('should fill all search parameters and open search results page', () => {
    Zonvakantie.selectDestinationCountry('Spanje');
    Zonvakantie.selectDepartureDate(4);
    Zonvakantie.selectTripDuration('11-16');
    Zonvakantie.searchForTrips();
    SearchResults.searchResults.waitForDisplayed(4000);
    expect(SearchResults.searchResults.isDisplayed()).to.equal(true);
  });

  it('should do some filtering on Search Results page and open first result from list', () => {
    SearchResults.inclVulchtBtn.click();
    SearchResults.waitForLoader();
    SearchResults.selectDepartureCity('Amsterdam (Schiphol)');
    SearchResults.waitForLoader();
    SearchResults.selectCareType('All inclusive');
    SearchResults.waitForLoader();
    SearchResults.viewFirstResult();
    TourInfo.checkPriceBtn.waitForDisplayed(4000);
    expect(TourInfo.checkPriceBtn.isDisplayed()).to.equal(true);
  });
  it('should check availability of tour (switch departure date if necessary) and book it', () => {
    TourInfo.checkToursPrice();
    if (TourInfo.warningMessage.isDisplayed() === true) {
      TourInfo.selectOtherAvailableDepDate();
    }
    TourInfo.bookNow();
    BookingInfo.conatainer.waitForDisplayed(10000);
    expect(BookingInfo.conatainer.isDisplayed()).to.equal(true);
  });
  it('should fill all required data for tour and proceed to next step', () => {
    BookingInfo.filloutTourInfo(data);
    BookingInfo.loader.waitForDisplayed(5000, true);
    expect($('.page-booking').isDisplayed()).to.equal(true);
  });

  it('should check price and proceed to checkout', () => {
    priceNum = BookingStep3.priceMain.getText();
    priceDec = BookingStep3.priceDecimal.getText();
    BookingStep3.goToCheckoutBtn.click();
    BookingInfo.loader.waitForDisplayed(5000, true);
    // Not creating separate page object here, because need only two elelments
    expect($('.the-total .price-rowtotal').getText()).to.equal(priceNum);
    expect($('.the-total .price-rowtotal-decimals').getText()).to.equal(priceDec);
  });
});
