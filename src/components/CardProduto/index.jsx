import styles from "./CardProduto.module.scss";

export default function CardProduto({data}) {

  return (
    <>
      <li className={styles.container}>
        <div className={`${styles.imgWrapper} ${data.hasOff && styles.hasOff}`}>
          <img src={`/src/assets/img/image ${data.img}.png`} alt={data.name} />
        </div>
        <div className={styles.infos}>
          <p className={styles.name}>{data.name}</p>
          {data.complement && <p className={styles.name}>{data.complement}</p>}
          <img src="/src/assets/icons/5stars.svg" alt="Avaliação" />
          {data.off && <span className={styles.off}>{data.off}</span>}
          <p className={styles.price}>
            {data.price.split(",")[0]},<span>{data.price.split(",")[1]}</span>
          </p>
        </div>
        <button>COMPRAR</button>
      </li>
    </>
  );
}
