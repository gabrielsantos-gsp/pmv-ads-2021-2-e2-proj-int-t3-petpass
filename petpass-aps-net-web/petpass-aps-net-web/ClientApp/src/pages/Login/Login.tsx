import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <form>
          <h1>Fazer Login</h1>
          <span className={styles.divisor} />
          <h2>Entre para iniciar uma nova sessão</h2>
          <div className={styles.inputContainer}>
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
