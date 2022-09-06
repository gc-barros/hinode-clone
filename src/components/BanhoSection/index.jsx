import styles from "./BanhoSection.module.scss";

export default function BanhoSection() {

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Corpo e Banho</h2>
        <p>Confira nossa linha de produtos para o corpo. Hidratantes, loções e desodorantes para os cuidados com seu corpo.</p>
        <button>Conheça nossos produtos</button>
      </div>
    </section>
  );
}
