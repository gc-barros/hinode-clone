import { useState } from "react";
import styles from "./InteresseSection.module.scss";

export default function InteresseSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const productList = [
    {
      title: 'Venyx L`Or',
      quantity: '100ml',
      price: 'R$ 150,00',
      div: 'em até 2x de R$ 75,00',
      img: 'venyx',
    },
    {
      title: 'Multi- Vit Complex A-Z Mulheres',
      quantity: '60 Cápsulas',
      price: 'R$ 85,00',
      div: 'em até 2x de R$ 42,50',
      img: 'multivit',
    },
  ]

  const content = [
    {
      img: '1',
      title: 'Maquiagens',
    },
    {
      img: '2',
      title: 'Fragrâncias',
    },
    {
      img: '3',
      title: 'Energia & Performance',
    },
    {
      img: '4',
      title: 'Corpo & Banho',
    },
  ]

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.wrapper}>
          {
            content.map((i, j) => (
              <li className={styles.card} key={j}>
                <div className={styles.img}>
                  <img src={`/src/assets/img/interesse${i.img}.png`} alt={i.title} />
                </div>
                <span>{i.title}</span>
                <button>Ver mais</button>
              </li>
            ))
          }
        </ul>
      </section>

      <article className={styles.carousel}>
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

        <div className={styles.carouselWrapper}>
          <ul style={{ marginLeft: (-currentSlide * 1165) + 1748 }}>
            {
              [...productList,...productList,...productList,...productList,].map((produto, i) => (
                <li className={styles.cardCarousel} key={i}>
                  <div className={styles.info}>
                    <p>{produto.title}</p>
                    <p>{produto.quantity}</p>
                    <img src="/src/assets/icons/4stars.svg" alt="Avaliação" />
                    <span>
                    {produto.price.split(",")[0]},<strong>{produto.price.split(",")[1]}</strong>
                    </span>
                    <span>{produto.div}</span>
                  </div>
                  <div className={styles.cardImg}>
                    <img src={`/src/assets/img/${produto.img}.png`} alt={produto.title} />
                  </div>
                  <button>Comprar</button>
                </li>
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
  );
}
