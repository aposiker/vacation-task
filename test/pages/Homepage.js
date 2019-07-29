class Homepage {
  get selectSunVerticalBtn() { return $('.vertical.sun'); }

  get acceptCookiesBtn() { return $('.cookiebar__agreement .btn'); }

  open(url = '/') {
    return browser.url(url);
  }

  closeCookiesBanner() {
      return this.acceptCookiesBtn.click();
  }

  selectSunVertical() {
    return this.selectSunVerticalBtn.click();
  }
}

module.exports = new Homepage();
