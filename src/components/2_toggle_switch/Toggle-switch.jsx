import { useState } from "react";
import styles from "./Toggle-switch.module.css";

const ToggleSwitch = () => {
  const [toggleStatus, setToggleStatus] = useState(false);

  const handleOnChange = (e) => {
    const st = e.target.checked;
    setToggleStatus(st);
  };
  console.log(toggleStatus);
  return (
    <>
      {/* basic version of toggle switch */}
      {/* <div
        className={styles.container}
        style={{ backgroundColor: toggleStatus ? "purple" : "orange" }}
      >
        <input type="checkbox" onChange={handleOnChange} />
      </div> */}

      {/* actual toggle switch */}
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
