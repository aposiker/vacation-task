class SearchResults {
  get searchResults() { return $('.page-search-results'); }
  get inclVulchtBtn() { return $('.transport-arranged'); }

  get viewBtnOnResults() { return $$('.properties-footer .btn.primary'); }

  get loader() { return $('.results-loader'); }

  waitForLoader(timeout) {
    this.loader.waitForDisplayed(timeout, true);
  }

  selectDepartureCity(city) {
    $(`span*=${city}`).click();
  }

  selectCareType(careType) {
    $(`span*=${careType}`).click();
  }

  viewFirstResult() {
    this.viewBtnOnResults[0].click();
  }
}
module.exports = new SearchResults();
