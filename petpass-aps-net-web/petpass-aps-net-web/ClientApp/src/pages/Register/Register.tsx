import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Register.module.scss";

const Register: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <form>
          <h1>Criar uma conta</h1>
          <span className={styles.divisor} />
          <h2>Preencha as informações abaixo para criar sua conta</h2>
          <div className={styles.inputContainer}>
            <input type="name" name="name" placeholder="Informe seu nome" />
            <input
              type="email"
              name="email"
              placeholder="Cadastre seu E-mail"
            />
            <input
              type="password"
              name="password"
              placeholder="Cadastre sua senha"
            />
            <input
              type="Confirmar a sua senha"
              name="password"
              placeholder="Confirmar a sua senha"
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
};

export default Register;
