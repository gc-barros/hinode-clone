import CardProduto from "../CardProduto";
import styles from "./Carrossel.module.scss";
import { useState } from "react";

export default function Carrossel({showAllButton = false, productList = []}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <article className={styles.container}>
        {showAllButton && <a href="#">Ver todos</a>}

        <button
          className={styles.carouselButton}
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

        <div className={styles.wrapper}>
          <ul style={{ marginLeft: (-currentSlide * 1165) + 1748 }}>
            {
              [...productList,...productList,...productList,...productList,].map((produto, i) => (
                <CardProduto data={produto} key={i} />
              ))
            }
          </ul>
        </div>

        <button
          className={styles.carouselButton}
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
      </article>
    </>
  )
}