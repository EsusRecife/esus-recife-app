// import logo from '../assets/logo-esus.svg'
import "./styles/welcomemessage.css"

function WelcomeMessage() {
    return (
        <>
            <div className='welcomegroup'>
                <p className='title'>Bem vindo ao</p>

                <div className='esus-logo-name'>
                    <div>
                        {/* <img src={logo} alt="Logo-Esus" /> */}
                    </div>
                    <p>Esus Recife</p>
                </div>

                <div className='tripletext'>
                    <p>Monitore a eficiência da reciclagem de compostos orgânicos da sua escola e contribua para uma cidade mais sustentável.</p>
                </div>
                
            </div>
        </>
    )
}

export default WelcomeMessage;