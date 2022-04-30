import U, {printName as printUserName, printAge} from "./user.js"

const user = new U("Ali", 25);
printUserName(user);
printAge(user);