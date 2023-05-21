import './styles/firstlayer.css'
import {FormLogin} from './FormLogin';
import { FormSenha } from './FormLogin';
import WelcomeMessage from './WelcomeMessage';
import { FormRegister } from './FormLogin';
import { Logo } from './Logo';

export function LoginSplash() {
    return(
        <>
            <div className='firstlayer'>
                
                <div className='clipcircle'>
                    <WelcomeMessage></WelcomeMessage>
                </div>

                <div className='formlogin'>
                    <FormLogin></FormLogin>
                </div>

            </div>
        </>
    )
}

export function SenhaSplash() {
    return(
        <>
            <div className='firstlayer'>
                
                <div className='clipcircle'>
                    <Logo></Logo>
                </div>

                <div className='formlogin'>
                    <FormSenha></FormSenha>
                </div>

            </div>
        </>
    )
}

export function RegisterSplash() {
    return(
        <>
            <div className='firstlayer'>

                <div >
                    <FormRegister></FormRegister>
                </div>

            </div>
        </>
    )
}

