
// without Command Pattern

// here we have 4 operations (commands) taht we can do ( add, subtract, multiply, divide ).
// we want to take these commands out of our calculator and make them their own objects that have
// an exescute and undo function.
// the reason for this is that we can play back and rewind our commands so that we can add and then
// we can undo our add whicj is the same as subtract 
// so, we can do then undo our different commands that we want to
// also, we can combine together different commands easily, so if you want to add and multiply something
// normally you have to call add then you would have to call multiply, but you can just create 
// a command called addThenMultiply which will do the adding and the multiply in the correct order
// and it will even undo them in the correct order as well 
// this is the real power of command pattern, the ability to do then undo, as well as to make 
// your commands separater from the actual object that you are doing the command on.

class Calculator {
    constructor() {
      this.value = 0
    }
  
    add(valueToAdd) {
      this.value = this.value + valueToAdd
    }
  
    subtract(valueToSubtract) {
      this.value = this.value - valueToSubtract
    }
  
    multiply(valueToMultiply) {
      this.value = this.value * valueToMultiply
    }
  
    divide(valueToDivide) {
      this.value = this.value / valueToDivide
    }
  }

  const calculator = new Calculator();
  calculator.add(10);
  console.log(calculator.value)
  calculator.multiply(2);
  console.log(calculator.value)



