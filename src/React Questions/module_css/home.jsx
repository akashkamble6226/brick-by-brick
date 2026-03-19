import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      {/* <div className={styles.backDiv}>
        <h1>This is home page!!!!</h1>
      </div> */}

      <div className={styles.container}>
        <div className={styles.box}>1</div>
        <div className={styles.box}>1</div>
        <div className={styles.box}>1</div>
      </div>
    </>
  );
};

export default Home;
