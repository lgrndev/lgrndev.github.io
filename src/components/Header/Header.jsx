import lyon1 from '../../assets/lyon1.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="w-screen bg-blue-900 h-20 flex flex-row justify-center items-center relative">
            <Link to='./' className="">
                <div className="text-6xl text-white titre ">Lgrndev</div>
            </Link>
            <div className="absolute right-8 titre text-2xl">
                Lyon1
            </div>
            <img src={lyon1} alt='lyon1' className='size-20 invert absolute left-8'></img>
        </div>
    );
}

export default Header;