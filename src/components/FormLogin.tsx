import './styles/formlogin.css'

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