import React from "react";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.scss";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div>
          <h1>PetPass</h1>
          <h2>
            O jeito mais fácil de manter a saúde do seu melhor amigo em dia.
          </h2>
          <button>Sobre nós</button>
        </div>
        <div>
          <img src="/image/home.svg" alt="" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
