// The idea of single responsibility principal is that all of your classes, modules, functions
// anything inside your code that can be put into a single part it should has one single responsibility
// that mean that it should have only on reason to change

// this class have two reasons to chage (it is not follow single responsibility principal)
// 1- if we change how we track our calories (trackCalories)
// 2- if we change how we log our calories (logCalorieSurplus)

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.loCalorieSurplus();
    }
  }

  logCalorieSurplus() {
    console.log("Max calories exceeded.");
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
