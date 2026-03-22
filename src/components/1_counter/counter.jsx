import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [clickedNumber, setClickedNumber] = useState(false);

  const handleButtonClick = (type) => {
    if (type === "add") {
      setCount((cnt) => cnt + 1);
    } else if (type === "sub") {
      setCount((cnt) => cnt - 1);
    } else {
      setCount(0);
    }
  };

  const handleCountTextClick = (makeOn) => {
    if (makeOn) {
      setClickedNumber(true);
    } else {
      setClickedNumber(false);
    }
  };

  const handleTextInputChange = (e) => {
    const num = Number(e.currentTarget.textContent);
    setCount(num);
  };
  return (
    <>
      <div className={styles.container}>
        <h3>###The Counter App###</h3>

        <div className={styles.buttons}>
          <button type={"button"} onClick={() => handleButtonClick("add")}>
            +
          </button>

          <h3
            onClick={() => handleCountTextClick(true)}
            contentEditable={clickedNumber}
            suppressContentEditableWarning
            onBlur={() => handleCountTextClick(false)}
            onInput={handleTextInputChange}
          >
            {count}
          </h3>

          <button type={"button"} onClick={() => handleButtonClick("sub")}>
            -
          </button>
        </div>
        <button type={"button"} onClick={() => handleButtonClick("reset")}>
          Reset
        </button>
      </div>
    </>
  );
};
export default Counter;
