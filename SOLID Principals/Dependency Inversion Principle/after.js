// we will create some kind of intermediate APIm this will going to be your wrapper which
// is going to wrap around stripe and wrap around paypal
// the idea of this wrapper is that it has the exact same functions, tghe exact same methods,
// the exact same interface.
// so, in our store we never have to change our store

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new PayPal();
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with stripe.`
    );
  }
}

class PayPal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with Paypal.`);
  }
}

// to switch from stripe to paypal just change the payment processor
const store = new Store( new StripePaymentProcessor("John"));
// const store = new Store(new PaypalPaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(2);
