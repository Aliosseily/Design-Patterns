// now we are following single responsibility principal
// because CalorieTracker has only one reason to change
// the only reason to change is how we're tracking our calories

// we move logMessage into a separate module so if we want to change how we're logging our calories
// we change it from it's module not from CalorieTracker class


import logMessage from "./logger.js";

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage("Max Calories exceeded");
    }
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
