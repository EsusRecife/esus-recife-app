import logo from '../assets/logo-esus.svg';
import "./styles/logo.css"

export function Logo() {
    return(
        <>
            <div className='welcomegroup2'>

                <div className='esus-logo-name'>
                    <div>
                        <img src={logo} alt="Logo-Esus" />
                    </div>
                    <p>Esus Recife</p>
                </div>
                
            </div>
        </>
    )
}