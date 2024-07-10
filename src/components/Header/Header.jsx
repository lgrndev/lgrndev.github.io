import { Link } from "react-router-dom";
import '../../styles/BasicStyle.css'
import phi from '../../assets/lyon1.png'

function Header() {
    return (
        <div className="flex md:flex-row justify-between p-4 items-center flex-col">



        






            <div className="flex flex-row gap-4 items-center">
                <img src={phi} alt="logo phi" className="h-20 invert" />
                <div className="text-2xl font-bold text-white poppins-bold">Lgrndev</div>
            </div>
            <div className="flex sm:flex-row gap-8 items-center flex-col">
                <div className="border border-zinc-700 rounded-full sm:gap-8 gap-4 bg-zinc-800 flex flex-row pr-10 pl-10 text-sm nav-container">
                    <Link to="/" className="nav-link block p-2">Accueil</Link>
                    <Link to="/exercices" className="nav-link block p-2">Exercices</Link>
                    <Link to="/apropos" className="nav-link block p-2">A Propos</Link>
                </div>
                <Link className="border border-zinc-700 p-3 pl-6 pr-6 rounded-full text-white shadow bg-blue-600 hover:-translate-y-1 transition-all active:translate-y-1 cursor-pointer hover:bg-blue-500 active:bg-blue-700" to="https://github.com/lgrndev">Acceder au GitHub</Link>
            </div>
        </div>
    );
}

export default Header;