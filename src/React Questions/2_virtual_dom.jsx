// The virtual DOM is a lightweight copy of real dom that react uses to efficiently update the UI

//Instead of directly updating the browser DOM (which is slow), React:

// 1) Creates a virtual copy of the UI in memory
// 2) Updates that virtual copy
// 3) Compares it with the previous version
// 4) Updates only the changed parts in the real DOM

// 🔹 Example
// function App() {
//   const [count, setCount] = useState(0);

//   return <h1>{count}</h1>;
// }

// 👉 When count changes:

// React creates a new Virtual DOM
// Compares it with previous one
// Only updates <h1> text in real DOM

// _________________________________

// 🔹 Key Concept: Reconciliation

// 👉 Reconciliation is the process of:

// Comparing old Virtual DOM with new Virtual DOM and updating only differences.

// React uses a diffing algorithm:

// Compares elements level by level
// Uses keys to track list items

// ________________________________________

// 🔹 Role of "key" in Virtual DOM
// {items.map(item => <li key={item.id}>{item.name}</li>)}

// 👉 Why keys?

// Helps React identify which items changed

// Improves performance
// Prevents unnecessary re-renders
