
import { SideBar } from './SideBar';
import './styles/dashboard.css'
import axios from "axios"
import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useAuth } from "../AuthContext";

export function Dashboard() {

  const data = [
    { week: 'Semana 1', coletas: 5, kgs: 100 },
    { week: 'Semana 2', coletas: 4, kgs: 120 },
    { week: 'Semana 3', coletas: 6, kgs: 80 },
    { week: 'Semana 4', coletas: 5, kgs: 90 },
  ];

  const [auth, setToken] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [senha, setPassword] = useState<string>("");
  
    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLogin(event.target.value);
    };
  
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      fetchToken();
    };
  
    const fetchToken = async () => {
      try {
        const { token } = useAuth();
        let headersList = {
          Authorization: 'Bearer ' + token,
          Accept: "*/*",
          "Content-Type": "application/json",
        };
  
        let reqOptions = {
          url: "https://esus-recife-api.cyclic.app/key-information/dashboard/kg",
          method: "POST",
          headers: headersList,
        };
  
        const response = await axios.request(reqOptions);
        console.log(response);
        setToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return (
    <>

      <div className='firstlayer'>
          <header className="titletitle">
            <p>Gráficos</p>
          </header>
        <div className="main-card">


          <SideBar />
          <div className="block">
            <div className='card-container'>
              <div className="card">
                <h2 className="card-title">Kgs coletados</h2>
                <p className='content-card'>X</p>
              </div>

              <div className="card">
                <h2 className="card-title">Coletas por semana</h2>
                <p className='content-card'>X</p>
              </div>

              <div className="card">
                <h2 className="card-title">Qntd. Responsáveis</h2>
                <p className='content-card'>X</p>
              </div>
            </div>

            <div className="chart-container">
              <div className="chart">
                <LineChart width={790} height={300} data={data} >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line dataKey="kgs" stroke="#b3d38d" name="Kgs coletados" strokeWidth= {2} />
                  <Line dataKey="coletas" stroke="#55793f" name="Coletas por Semana" strokeWidth= {2}/>
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}
