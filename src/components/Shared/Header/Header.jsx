import React from "react";
// import classNames from "classnames";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          width={100}
          height={30}
          src="https://assets-global.website-files.com/63359abeb97bf0d5ca346052/6336e2cc37e3c15b9c7c4487_Logo_new.png"
          alt=""
        />
      </div>
      <h4>Job portal Assignment</h4>
   
    </header>
  );
};

export default Header;
