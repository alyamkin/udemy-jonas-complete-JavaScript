const func3 = () => {
  console.log('start func3');
  console.log('end func3');
};
const func2 = () => {
  console.log('start func2');
  func3();
  console.log('end func2');
};
const func1 = () => {
  console.log('start func1');
  func2();
  console.log('end func1');
};

func1();
