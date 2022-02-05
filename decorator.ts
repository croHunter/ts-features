// "target":"es5",
// "experimentalDecorators": true,
// "emitDecoratorMetadata": true,

@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  //if parameter is included then called=>decorator factory==>normal function==>always returns a function(decorator)
  @logError('something bad !')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
    // throw new Error();
    // console.log('swish');
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log('target', target);
  console.log('key', key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    // Target: { pilot: [Function (anonymous)] }
    const method = desc.value;
    // console.log(method);

    //intercepted a pilot function and wrapped inside of our own funciton
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot();
