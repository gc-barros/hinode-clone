import styles from "./EmpireSection.module.scss";

export default function EmpireSection() {

  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <img src="/src/assets/img/linhaempire.png" alt="Linha EMPIRE" />
      </div>
      <div className={styles.wrapper}>
        <h2>Linha EMPIRE</h2>
        <p>Escolha a sua fragrância masculina favorita e desperte as melhores sensações.</p>
        <button>Conheça nossos produtos</button>
      </div>
    </section>
  );
}
