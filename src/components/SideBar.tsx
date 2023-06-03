import { FaChartLine, FaUser, FaQuestion, FaSignOutAlt, FaFileAlt } from 'react-icons/fa';
import './styles/sidebar.css';

export function SideBar() {

    return (


        <nav>
            <ul style={{
                listStyle: "none"
            }}>
                <li className='content-sideBar'>
                   <FaChartLine className='menu-icon'/>
                    <a href={`/`}>Gráficos</a>
                </li>
                <li className='content-sideBar'>
                   <FaFileAlt className='menu-icon'/>
                    <a href={`/FormsColeta`}>Formulário</a>
                </li>
                <li className='content-sideBar'>
                    <FaUser className='menu-icon'/>
                    <a href={`/Register`}>Conta</a>
                </li>
                <li className='content-sideBar'>
                    <FaQuestion className='menu-icon'/>
                    <a href={`/Ajuda`}>Ajuda</a>
                </li>
                <li className='content-sideBar'>
                    <FaSignOutAlt className='menu-icon'/>
                    <a href={`/`}>Sair</a>
                </li>
            </ul>
        </nav>



    )
}
