import styles from "./basic.module.css";

// display controles how elements behave in a layout flow

const Basic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>The basic</div>
      <div className={styles.box}>1st box</div>
      <div className={styles.box}>2nd box</div>
      <div className={styles.box}>3rd box</div>
    </div>
  );
};

export default Basic;
