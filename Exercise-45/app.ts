/*45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 */
function createCar(
  manufacturer: string,
  model: string,
  ...details: [string, any][]
): { manufacturer: string; model: string; [key: string]: any } {
  let car = { manufacturer: manufacturer, model: model };
  for (let [key, value] of details) {
    car[key as keyof typeof car] = value;
  }
  return car;
}

let myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
console.log(myCar);
