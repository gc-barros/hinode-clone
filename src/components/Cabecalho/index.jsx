import styles from './Cabecalho.module.scss'

export default function Cabecalho() {

  return (
    <header className={styles.container}>
      <div className={styles.top}>
        <div className={styles.wrapper}>
          <a href='#'>A Empresa</a> 
          <div className={styles.right}>
            <a href="#">Seja um consultor</a>
            <a href="#">Fale conosco</a>
          </div>
        </div>
      </div>

      <div className={styles.mid}>
        <div className={styles.midWrapper}>
          <div className={styles.logo}>
            <img src="/src/assets/img/logo.png" alt="Logo Grupo Hinode" />
          </div>
          <div className={styles.search}>
            <input type="search" placeholder='Busque aqui o produto de seu interesse' />
          </div>
          <ul className={styles.wrapper}>
            <li>
              <a href='#'>Entre ou cadastre-se</a>
            </li>
            <li>
              <a href='#'>Favoritos</a>
            </li>
            <li>
              <a href='#'>Sacola</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.wrapper}>
          <button>Todas as categorias</button>
          <ul>
            <li>
              <a href='#'>Fragrâncias</a>
            </li>
            <li>
              <a href='#'>Maquiagem</a>
            </li>
            <li>
              <a href='#'>Corpo & Banho</a>
            </li>
            <li>
              <a href='#'>Vida Saudável</a>
            </li>
            <li>
              <a href='#'>Energia e Performance</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

