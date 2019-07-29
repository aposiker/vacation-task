class BookingStep3 {
  get priceMain() { return $('.price.price-total.with-info .price-number'); }

  get priceDecimal() { return $('.price.price-total.with-info .price-decimals'); }

  get goToCheckoutBtn() { return $('.booking-footer.hidden-on-mobile .btn.primary'); }
}

module.exports = new BookingStep3();
