import { useState } from "react";
import styles from "./FirstSection.module.scss";

export default function Cabecalho() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Base Líquida DAZZLE</h1>
          <button>Comprar</button>
        </div>
  
        <div className={styles.imgWrapper}>
          <ul
            className={styles.imgList}
            style={{ marginLeft: -currentSlide * 1304 }}
          >
            {[0, 1, 2, 3].map((item, i) => (
              <li key={i}>
                <img
                  src="/src/assets/img/baseliquida.png"
                  alt="Base Líquida DAZZLE"
                />
              </li>
            ))}
          </ul>
        </div>
  
        <div className={styles.carousel}>
          <button
            title="Anterior"
            aria-label="Anterior"
            onClick={() => {
              if (currentSlide === 0) {
                setCurrentSlide(3);
                return;
              }
              setCurrentSlide((prev) => prev - 1);
            }}
          ></button>
          <button
            title="Próximo"
            aria-label="Próximo"
            onClick={() => {
              if (currentSlide === 3) {
                setCurrentSlide(0);
                return;
              }
              setCurrentSlide((prev) => prev + 1);
            }}
          ></button>
        </div>
        <ul className={styles.indicators}>
          {[0, 1, 2, 3].map((item) => (
            <li
              className={currentSlide === item ? styles.active : ""}
              key={item}
              onClick={() => {
                setCurrentSlide(item);
              }}
            ></li>
          ))}
        </ul>
      </section>
      <aside className={styles.benefits}>
        <ul>
          <li>Tudo em até 6x sem juros</li>
          <li>FRETE GRÁTIS nas compras acima de R$ 49,00 para todo o Brasil</li>
          <li>Hinode Prime: Receba em casa todo mês com 20% OFF</li>
          <li>Garanta mais economia com frete inteligente</li>
        </ul>
      </aside>
    </>
  );
}
