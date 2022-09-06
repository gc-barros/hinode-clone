import styles from './Rodape.module.scss';

export default function Rodape() {
  return(
    <footer className={styles.container}>
      <section className={styles.receba}>
        <div className={styles.wrapper}>
          <h3>Receba nossas ofertas e novidades</h3>
          <input type="text" placeholder='Digite seu nome' />
          <input type="email" placeholder='Digite seu email' />
          <button>Cadastrar</button>
        </div>
      </section>
      <section className={styles.links}>
        <ul>
          <li>GRUPO HINODE</li>
          <li><a href="#">A Empresa</a></li>
          <li><a href="#">Catálogo Hinode</a></li>
          <li><a href="#">Seja um Consultor</a></li>
          <li><a href="#">Hinode Prime</a></li>
          <li><a href="#">Frete Inteligente</a></li>
        </ul>
        <ul>
          <li>MAIS VENDIDOS</li>
          <li><a href="#">Corps Lígnea Body Contour Gel Modelador</a></li>
          <li><a href="#">Shake de Vanilla H+ HND</a></li>
          <li><a href="#">hake de Morango H+ HND</a>S</li>
          <li><a href="#">Luva de Silicone Creme para as Mãos Hands</a></li>
          <li><a href="#">Empire Gold</a></li>
          <li><a href="#">Empire VIP</a></li>
        </ul>
        <ul>
          <li>DÚVIDAS FREQUENTES</li>
          <li><a href="#">Fale Conosco</a></li>
          <li><a href="#">Entrega, Trocas e Devoluções</a></li>
          <li><a href="#">Compra e Venda</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Remover Consentimento</a></li>
        </ul>

        <aside>
          <button>CENTRAL DE ATENDIMENTO</button>
          <p>De segunda a sexta das 9h às 21h</p>
          <p>Capitas e regiões metropolitanas 4020-2424</p>
          <p>Demais localidades: 0800-144-6633</p>
          <div className={styles.social}>
            <a href="#">
              <img src="/src/assets/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/src/assets/icons/youtube.svg" alt="YouTube" />
            </a>
            <a href="#">
              <img src="/src/assets/icons/facebook.svg" alt="Facebook" />
            </a>
          </div>
        </aside>
      </section>
      <div className={styles.last}>
        <div className={styles.wrapper}>
          <img src="/src/assets/img/screenshot.png" alt="Grupo Hinode Rodapé" />
        </div>
      </div>
    </footer>
  )
}