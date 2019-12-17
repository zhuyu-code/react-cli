require("babel-runtime/regenerator");
require("./main.less");
require("./main.css");
require("./index.html");
if (module.hot) {
    module.hot.accept();
  }
console.log("sads");
const a="zhuyu";
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true
 const promise= new Promise((resolve,reject)=>{
      resolve("zhuyu")
  })
  const async=async ()=>{
      await console.log("zhuyu");
  }
  var foo = function foo(a, b) {
    return Object.assign(a, b);
};