import './styles/formlogin.css'
// import logo from '../assets/logo-esus.svg';


export function FormLogin() {

    return (
      <>
        <div className="forms">
            
            <header className="titletile">
                <p>Login</p>
                <div>
                    
                </div>
            </header>

            <form>

                <div className="inputtile">
                    <label htmlFor="codigo">Código da escola</label>
                    <input type="text" name="codigo"  />
                </div>

                <div className="inputtile">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha"  />
                </div>

                <input type="submit" value={'Executar login'} className='submit'/>

                <a href="" className='redirectpassword'>Esqueceu sua senha?</a>

                <div className="footer">
                    <p>Novo por aqui?</p>
                    <a href="">Faça um cadastro</a>
                </div>

            </form>
        </div>
      </>
    )
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

                <input type="submit" value={'Executar login'} className='submit'/>

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
                <input type="submit" value={'Finalizar cadastro'} className='submit'/>
            </div>
            

            </form>
        </div>
        
        
      </>
    )
  }