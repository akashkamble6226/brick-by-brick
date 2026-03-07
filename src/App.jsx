import { solution } from "./codility-sample";

function App() {
  const testCases = [
    { input: [1, 3, 6, 4, 1, 2], expected: 5 },
    { input: [1, 2, 3], expected: 4 },
    { input: [-1, -3], expected: 1 },
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "24px", lineHeight: 1.6 }}>
      <h1>Codility Sample Test</h1>
      <p>Smallest positive integer missing from each array:</p>

      <ul>
        {testCases.map(({ input, expected }) => {
          const actual = solution(input);
          const isMatch = actual === expected;

          return (
            <li key={input.join(",")} style={{ marginBottom: "12px" }}>
              <div>
                <strong>Input:</strong> [{input.join(", ")}]
              </div>
              <div>
                <strong>Output:</strong> {actual}
              </div>
              <div>
                <strong>Expected:</strong> {expected} ({isMatch ? "PASS" : "FAIL"})
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
export default App;
