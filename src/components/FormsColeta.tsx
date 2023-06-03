
import { SideBar } from './SideBar';
import './styles/formsColeta.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function FormsColeta() {


  return (
    <>

      <div className='firstlayer'>
        <header className="titletitle">
          <p>Formulário de Cadastro</p>
        </header>
        <div className="main-card">


          <SideBar />
          <div className="block">
            <div className='flex-container'>

              <div className='input-inside'>
                <label htmlFor="codigo">Qntd. Alimento recebido por semana</label>
                <input type="text" name="codigo" />
              </div>

              <div className='input-inside'>
                <label htmlFor="nome"> Frequência de coleta dos compostos</label>
                <input type="text" name="nome" />
              </div>

              <div className='input-inside'>
                <label htmlFor="cnpj">Período do dia para acontecer a coleta</label>
                <input type="text" name="cnpj" />
              </div>

              <div className='input-inside'>
                <label htmlFor="telefone">Principais tipos de resíduos gerados:</label>
                <input type="text" name="telefone" />
              </div>

              <div className='input-inside'>
                <label htmlFor="email">Qntd. de alimento gasto por semana</label>
                <input type="text" name="email" />
              </div>

              <div className='input-inside'>
                <label htmlFor="cep">Meta mensal:</label>
                <input type="text" name="cep" />
              </div>
            </div>
            <div className="finish-register">
              <button type="submit" className="submit" > Finalizar cadastro</button>
            </div>
            <div className="meta-content">
              *A meta mensal é a quantidade de kgs de alimento que a escola deseja que seja coletado
            </div>
          </div>
        </div>
      </div>
    </>


  )
}
