import 'reflect-metadata';

// const plane={
//   color:'red'
// }

/*metadata associated with plane object;*/

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);

// const note=Reflect.getMetadata('note',plane);
// const height=Reflect.getMetadata('height',plane);
// console.log(note);
// console.log(height);

/*metadata associated with color property;*/
// Reflect.defineMetadata('note','hi there',plane,'color');
// const note=Reflect.getMetadata('note',plane,'color');
// console.log(note);
/******************************************/
/*metadata associated with class method;*/
@printMetadata
class Plane {
  color: string = 'red';
  @markFunction('123')
  fly(): void {
    console.log('vrrrr');
  }
}
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret); //'123'

function printMetadata(target: typeof Plane) {
  //key=>'fly'
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret); //'123'
  }
}
