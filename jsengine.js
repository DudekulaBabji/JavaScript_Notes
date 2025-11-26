//A JavaScript engine is a software component inside browsers
//It takes JavaScript code → processes it → executes it.
//v8 for google, spidermonkey - firefox, chakra-microsoft

//Architecture
// code -> parsing -> compilation -> execution

//step1 - code
  //when we write a code in js 

//step2 - parsing
  // that code divide like tokens
  // it generate syntax parser
  // and gives AST - Abstract Syntax Tree - it will check your code for errors and convert it into AST 
//ast goes to the interpretter and intp converts code in byte code and that codes goes to the execution step

//step 3 - compilation
  //it is a just-in-time compiler - JIT 
  //which has a interpretter and compiler  -- to optimize
  //when the AST goes to the interpretter and that interpretter converts high level code into byte code 
  //that code goes to execution part

//step4 - execution
  //code execute line-by-line 
  // memory heap -> space where all var , functions assigned memory
  //call stack -> keeps track of function calls 

//garbage collector
  //it try to free up memory heap
  //when ever a function is not been used or cleared the time out
  //collects the all garbage & it swipes it
  //we have 2 algorithm mark phase and sweap phase
  //1) mark phase -> starts from root objects it reference var objects, function
  //2) sweap phase -> goes through memory any object that was not marked 


//JS Runtime
// ✔ Provides extra features like:
// DOM
// setTimeout
// fetch
// APIs
