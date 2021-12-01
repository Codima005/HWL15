const HAMBURGER = {
  sizeBurg: {
    small: {
      price: 5,
      calories: 20,
    },
    big: {
      price: 10,
      calories: 40,
    },
  },

  toppings: {
    chees: {
      price: 1,
      calories: 20,
    },
    salad: {
      price: 2,
      calories: 5,
    },
    potato: {
      price: 1.5,
      calories: 10,
    },
  },

  supplements: {
    seasoning: {
      price: 1.5,
      calories: 0,
    },
    mayonnaise: {
      price: 2,
      calories: 5,
    },
  },
};

class hamburger {
  get size() {
    return this.sizeValue ? this.sizeValue : HAMBURGER.sizeBurg.small;
  }

  set size(value) {
    this.sizeValue = value;
  }

  get toppings() {
    return this.toppingsValue ? this.toppingsValue : [HAMBURGER.toppings.chees];
  }

  set toppings(value) {
    if (!this.toppingsValue) {
      this.toppingsValue = [];
    }

    if (Array.isArray(value)) {
      value.forEach((toping) => this.toppingsValue.push(toping));
    } else {
      this.toppingsValue.push(value);
    }
  }

  get supplements() {
    return this.supplementsValue
      ? this.supplementsValue
      : [HAMBURGER.supplements.mayonnaise];
  }

  set supplements(value) {
    if (!this.supplementsValue) {
      this.supplementsValue = [];
    }
    if (Array.isArray(value)) {
      value.forEach((supl) => this.supplementsValue.push(supl));
    } else {
      this.supplementsValue.push(value);
    }
  };

  get price() {
    let finalPrice = 0;
    for (let key in this) {
      if (Array.isArray(this[key])) {
        let partPrice = this[key].reduce(function (price, item) {
          return price + item.price;
        }, 0);
        finalPrice += partPrice;
      } else {
        finalPrice += this[key].price;
      }
    }
    return finalPrice;
  }

  get calories() {
    let finalCalories = 0;
    for (let key in this) {
      if (Array.isArray(this[key])) {
        let partCalories = this[key].reduce(function (calories, item) {
          return calories + item.calories;
        }, 0);
        finalCalories += partCalories;
      } else {
        finalCalories += this[key].calories;
      }
    }
    return finalCalories;
  }
}

let cheaseburger = new hamburger();

cheaseburger.toppings = [HAMBURGER.toppings.chees, HAMBURGER.toppings.salad];
console.log(cheaseburger.toppings);

cheaseburger.size = HAMBURGER.sizeBurg.big;
console.log(cheaseburger.size);

cheaseburger.supplements = HAMBURGER.supplements.mayonnaise;
console.log(cheaseburger.supplements);

cheaseburger.price;
console.log(cheaseburger.price);
console.log(cheaseburger.calories);
