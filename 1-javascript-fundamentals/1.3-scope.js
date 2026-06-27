function test() {
  if (true) {
    let blockScopped = "inside";
    var functionScopped = "available in function";
  }
  // console.log(blockScopped) // ReferenceError: blockScopped is not defined
  console.log(functionScopped); // available in function
}
test();
