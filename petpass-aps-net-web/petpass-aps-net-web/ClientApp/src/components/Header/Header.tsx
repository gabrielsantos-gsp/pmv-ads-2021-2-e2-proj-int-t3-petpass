import React, { memo } from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.logo}>
        <h1>
          <a href="/">PetPass</a>
        </h1>
      </div>
      <div className={styles.buttons}>
        <button>
          <a href="/login">Login</a>
        </button>
        <button>
          <a href="/register">Registrar</a>
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
