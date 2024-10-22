
//import Link from './Link.jsx';
import { Link } from 'react-router-dom';
import logoVeggieBites from '../assets/img/logoVeggieBites.png';

function NavBar(){
    return(
        <nav className=' text fixed top-0 w-full z-50 p-4 flex items-center justify-between'>

        <div className="flex-shrink-0">
            <img src={logoVeggieBites} alt="logo" className="h-10 w-auto" />
        </div>

        <div className='container mx-auto px-4 py-3'>    
        <ul className='flex space-x-4'>
            <li>
                <Link to = {'/'} className='text-lg font-nunito font-bold' >Home</Link>
            </li>
            <li>
                <Link to = {'/chi-siamo'} className='text-lg font-nunito font-bold'>Chi siamo</Link>
            </li>
            <li>
                <Link to = {'/contatti'} className='text-lg font-nunito font-bold'>Contatti</Link>
            </li>

        </ul>
        </div>
        </nav>
    )
}

export default NavBar;