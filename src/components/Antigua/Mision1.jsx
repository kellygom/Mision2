import React from "react";
import styles from "./Mision1.module.css";

const Mision1 = () => {
  return (
    <div className={styles.fullScreenContainer}>
      <h1 className={styles.title}>Misión 1</h1>
      <iframe
        src="https://deportivos.onrender.com/"
        title="Proyecto integrado"
        className={styles.fullScreenIframe}
      />
    </div>
  );
};

export default Mision1;
