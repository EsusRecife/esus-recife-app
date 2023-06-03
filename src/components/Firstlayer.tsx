import './styles/firstlayer.css'
import {FormLogin} from './FormLogin';
import { FormSenha } from './FormLogin';
import WelcomeMessage from './WelcomeMessage';
import { FormRegister } from './FormLogin';
import { Dashboard
 } from './Dashboard';
 import {FormsColeta} from './FormsColeta'
import { Logo } from './Logo';
import { Ajuda } from './Ajuda';



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

export function DashboardScreen() {
    return(
        <>
            <div className='dashboard'>

                <div >
                    <Dashboard></Dashboard>
                </div>

            </div>
        </>
    )
}

export function FormsColetaScreen() {
    return(
        <>
            <div className='first-layer'>

                <div >
                    <FormsColeta></FormsColeta>
                </div>

            </div>
        </>
    )
}

export function AjudaScreen() {
    return(
        <>
            <div className='ajuda'>

                <div >
                    <Ajuda></Ajuda>
                </div>

            </div>
        </>
    )
}





