import React from "react";
import { Navbar, Footer, Top } from "../components";
import styles from "../style";
const Clothes = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.titleHead}`}>
            <h1>ALL TOPS</h1>
            <div className={`${styles.lineHeading}`}></div>
          </div>
          <Top />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Clothes;
