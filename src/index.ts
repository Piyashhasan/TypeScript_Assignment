function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

const formatStringOutput = formatString("hello", false);
console.log("Output -", formatStringOutput);

// --
interface Product {
  title: string;
  rating: number;
}
function filterByRating(items: Product[]): Product[] {
  return items.filter((item) => item.rating >= 4);
}

const books: Product[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filterProductOutput = filterByRating(books);
console.log("Filter Products -", filterProductOutput);

// --
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

const concatenateArraysOutput = concatenateArrays(["a", "b"], ["c"]);
console.log("Concatenate Array -", concatenateArraysOutput);

// --
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());

// --
type Value = string | number;

function processValue(value: Value): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
console.log(processValue("hello"));
console.log(processValue(10));

// --
interface Products {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Products[]): Products | null {
  if (products.length === 0) {
    return null;
  }

  return products.reduce((max, product) =>
    product.price > max.price ? product : max
  );
}
const products: Products[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

const expensiveProduct = getMostExpensiveProduct(products);
console.log("Expensive Product - ", expensiveProduct);

// --
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));

// --
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
squareAsync(4).then((res) => console.log(res));
squareAsync(-3).catch((err) => console.log(err.message));
