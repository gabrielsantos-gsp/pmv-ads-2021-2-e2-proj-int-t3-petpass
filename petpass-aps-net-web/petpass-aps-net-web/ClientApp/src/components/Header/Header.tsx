import React, { memo } from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.logo}>
        <h1>PetPass</h1>
      </div>
      <div className={styles.buttons}>
        <button>Login</button>
        <button>Registrar</button>
      </div>
    </header>
  );
};

export default memo(Header);
