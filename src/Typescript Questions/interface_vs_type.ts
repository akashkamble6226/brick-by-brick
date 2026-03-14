// In TypeScript, both interface and type are used to define the shape of data (like objects).
// In many cases they look similar, but there are some important differences.

// not necessory to have the first name to be capital , but its good practice
//(for long names use pascal case - HumanThing)
interface Human {
  name: string;
  age: number;
  male: boolean;
}

// Its like variable
type Human2 = {
  name: string;
  age: number;
  male: boolean;
};

// Both create the same structure.

// 1 - Key Differences

// Interface (uses extends)
// Interfaces are designed for object-oriented style inheritance.

interface Fruite {
  name: string;
  price: number;
}

interface Apple extends Fruite {
  isKingOfFruite: boolean;
}

// Type (uses & intersection)
type Person = {
  name: string;
};

type Emp = Person & {
  sal: number;
};

// __________________

// 2. Declaration Merging (Very Important)

// Interfaces support declaration merging.
interface H1 {
  name: string;
}

interface H1 {
  sal: number;
}

// Result:

// H1 = {
//   name: string;
//   age: number;
// }

// Type does not allow declarative merging.

// type A1 = { name: "string" };
// type A1 = { sal: number }; // ❌ Error

// _____________________

// 3. Union & Advanced Types
// type is more powerful because it can represent unions, primitives, tuples, etc.

// Union Example
type status = "Warning" | "Error" | "Success";
// Interface cannot do this.

// Tuples
type point = [number, number];
// Interface cannot represent tuples easily.

// Primitives
// type can alias primitives.
type id = number | string;
// Interface cannot represent primitives.
