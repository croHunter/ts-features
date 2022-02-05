class ArrayOfNumber {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}
class ArrayOfString {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}
//generic class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}
// new ArrayOfAnything<string>(['sujan','anish','sachin','sulav'])//good practice recommended
const arr = new ArrayOfAnything(['sujan', 'anish', 'sachin', 'sulav']); //type inference

//example of generic with function
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
//generic function
function printAny<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printAny<string>(['sujan', 'anish', 'sachin', 'sulav']); //good practice recommended
printAny(['sujan', 'anish', 'sachin', 'sulav']); //type inference

//generic constraint
class Bus {
  print() {
    console.log('i am a Bus');
  }
}
class House {
  print() {
    console.log('i am a House');
  }
}
interface Printable {
  print(): void;
}
function printBusAndHouses<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
printBusAndHouses([new House(), new House(), new House()]);
printBusAndHouses([new Bus(), new Bus(), new Bus()]);
