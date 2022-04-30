class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log("Answer:________________");
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log("Minimum:________________");
    console.log("Maximum:________________");
  }
}

const questions = [
  new BooleanQuestion("this video is useful."),
  new MultipleChoiceQuestion("what is your favorite languages ?", [
    "HTML",
    "CSS",
    "Javascript",
  ]),
  new TextQuestion("Describe your favorite js feature."),
  new RangeQuestion("What is the speed limit in your city ?"),
];

printQuiz(questions);

function printQuiz(questions) {
  console.log(questions);
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log(" ");
  });
}
