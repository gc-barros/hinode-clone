import './App.scss'
import Cabecalho from './components/Cabecalho'
import Carrossel from './components/Carrossel'
import FirstSection from './components/FirstSection'
import produtos from "./assets/produtos";
import InteresseSection from './components/InteresseSection';
import BanhoSection from './components/BanhoSection';
import EmpireSection from './components/EmpireSection';
import Rodape from './components/Rodape';

function App() {

  return (
    <div className="App">
      <Cabecalho />
      <FirstSection />

      <h2 className='title'>Mais vendidos</h2>
      <Carrossel productList={produtos.maisVendidos} showAllButton={true} />

      <h2 className='title'>Isso pode ser do seu interesse</h2>
      <InteresseSection />

      <h2 className='title'>Os mais desejados</h2>
      <Carrossel productList={produtos.maisDesejados} showAllButton={true} />

      <h2 className='title'>Vida saudável</h2>
      <Carrossel productList={produtos.vidaSaudavel} showAllButton={true} />

      <BanhoSection />
      <h2 className='title'>Corpo e banho</h2>
      <Carrossel productList={produtos.corpoBanho[0]} showAllButton={true} />
      <div style={{marginTop: -50}}>
        <Carrossel productList={produtos.corpoBanho[1]} showAllButton={false} />
      </div>

      <EmpireSection />

      <h2 className='title'>Fragrâncias</h2>
      <Carrossel productList={produtos.fragrancias[0]} showAllButton={true} />
      <div style={{marginTop: -50}}>
        <Carrossel productList={produtos.fragrancias[1]} showAllButton={false} />
      </div>

      <div className='acabaramChegar'>
        <h2 className='title'>Acabaram de chegar</h2>
        <Carrossel productList={produtos.acabaramChegar} showAllButton={false} />
      </div>

      <Rodape />

    </div>
  )
}

export default App
