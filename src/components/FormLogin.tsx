import logo from '../assets/logo-esus.svg'
import './styles/formlogin.css'
import App from '../App'
import axios from "axios"
import { useState } from "react"

export function FormLogin() {
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
        let headersList = {
          Accept: "*/*",
          "Content-Type": "application/json",
        };
  
        let bodyContent = JSON.stringify({
          inepCod: login,
          password: senha,
        });
  
        let reqOptions = {
          url: "https://esus-recife-api.cyclic.app/auth/login",
          method: "POST",
          headers: headersList,
          data: bodyContent,
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
        <div className="forms">
          <header className="titletile">
            <p>Login</p>
          </header>
  
          <form>
            <div className="inputtile">
              <label htmlFor="codigo">Código da escola</label>
              <input
                type="text"
                name="codigo"
                id="codigo-inep-login"
                onChange={handleChangeLogin}
                value={login}
              />
            </div>
  
            <div className="inputtile">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                id="senha-login"
                onChange={handleChangePassword}
                value={senha}
              />
            </div>
  
            <button type="submit" className="submit" onClick={handleClick}>
              Executar login
            </button>
  
            <a href="" className="redirectpassword">
              Esqueceu sua senha?
            </a>
  
            <div className="footer">
              <p>Novo por aqui?</p>
              <a href="">Faça um cadastro</a>
            </div>
          </form>
        </div>
      </>
    );
  }

export function FormSenha() {

    return (
      <>
        <div className="forms">
            
            <header className="titletile">
                <p>Redefinir senha</p>
            </header>

            <form>

                <div className="inputtile">
                    <label htmlFor="email">Informe o email cadastrado:</label>
                    <input type="text" name="email"  />
                </div>

                <button type="submit"  className='submit'>Executar Login</button>

                <div className="footer2">
                    <p>Não possuí mais acesso ao email?</p>
                    <a href="">Entre em contato com o suporte</a>
                </div>

            </form>
        </div>
      </>
    )
  }

  export function FormRegister() {

    return (
      <>
        <div className='title-register'>
            <p>Cadastro</p>
        </div>
        
        <div className='space-register'>
            <form className='register-form'>

            <div className='input-inside'>
                <label htmlFor="codigo">Código do INEP:</label>
                <input type="text" name="codigo"  />
            </div>

            <div className='input-inside'>
                <label htmlFor="nome">Nome da instituição:</label>
                <input type="text" name="nome"  />
            </div>

            <div className='input-inside'>
                <label htmlFor="cnpj">CNPJ:</label>
                <input type="text" name="cnpj"  />
            </div>

            <div className='input-inside'>
                <label htmlFor="telefone">Telefone:</label>
                <input type="text" name="telefone"  />
            </div>

            <div className='input-inside'>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email"  />
            </div>

            <div className='input-inside'>
                <label htmlFor="cep">CEP:</label>
                <input type="text" name="cep"  />
            </div>

            <div className='input-inside'>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome"  />
            </div>

            <div className='input-inside'>
                <label htmlFor="cpf">CPF:</label>
                <input type="text" name="cpf"  />
            </div>

            <div className='input-inside'>
                <label htmlFor="data-nascimento">Data de nascimento:</label>
                <input type="date" name="data-nascimento"/>
            </div>

            <div className='finish-register'>
                <button type="submit"  className='submit'>Finalizar Cadastro</button>
            </div>
            

            </form>
        </div>
        
        
      </>
    )
  }
  