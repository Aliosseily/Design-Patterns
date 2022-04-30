// open/close principal
// software entities (classes, modules, function, etc.) should be open for extension, but
// closed for modification.

// if we want to add new question to our quiz ( range for example )
// we first need to add this question to questions array 
// and we need to add another case statement for range

// this not follow open close principal
// because any time we want to add a question or change a type of question in questions array
// we have to go to printQuiz and change it
// this is the part saying that should be closed we don't want to be open 
// so if we change code outside (questions array) we should never change the code inside printQuiz
// printQuiz function should automatically work if we add a new quiz type (this is the closed portion of open/close principal)
// the open portion is that we have the abiity to add new things (add new range type for example)
// the close part is printQuiz function that should automatically know what to do with that new added type( ex.range )

// alot of time if we have switch statement or a bunch of if statements(if else/ if else) then
// we are not following open/close principal
// instead we need to break this out into individual classes (boolean class , multipleChoice class ....)


function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer:________________");
        break;
        case 'range':
        console.log("Minimum:________________");
        console.log("Maximum:________________");


    }
    console.log(" ");
  });
}

const questions = [
  {
    type: "boolean",
    description: "this video is useful.",
  },
  {
    type: "multipleChoice",
    description: "what is your favorite languages ?",
    options: ["HTML", "CSS", "Javascript"],
  },
  {
    type: "text",
    description: "Describe your favorite js feature.",
  },
  {
    type: "range",
    description: "What is the speed limit in your city ?",
  },
];

printQuiz(questions);
