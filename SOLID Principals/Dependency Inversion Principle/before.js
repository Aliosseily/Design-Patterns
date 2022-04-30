// in order to switch from stripe to paypal, we do alot of work inside the Store class
// because store class depends to stripe or later paypal.
// so we need to make Store class independent from stripe or paypal. so we can switch to
// stripe or paypal without changing the code inside Store class.

class Store {
  constructor(user) {
    this.paypal = new PayPal();
    this.user = user;
    // this.stripe = new Stripe(user);
  }
  purchaseBike(quantity) {
    // this.stripe.makePayment(200 * quantity * 100);
    this.paypal.makePayment(this.user, 200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paypal.makePayment(this.user, 15 * quantity);
    // this.stripe.makePayment(15 * quantity * 100);
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

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);
