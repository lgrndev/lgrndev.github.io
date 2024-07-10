import Image from '../../assets/c.png'
import { Link } from 'react-router-dom';

function Accueil () {
    return (
        <div className="w-screen flex-col flex items-center">
            <div className="bg-zinc-800 p-8 rounded-xl mt-8 gap-10 flex flex-col shadow-zinc-950 shadow-lg">
                <div className=" text-center text-5xl titre flex flex-row justify-between">
                    <div>C++</div>
                    <img src={Image} alt="C++" className='size-10'></img>
                </div>
                <div className='w-56'>Langage de programmation compilé permettant la programmation sous de multiples paradigmes, dont la programmation procédurale, la programmation orientée objet et la programmation générique.</div>
                <Link to='/exercices' className="text-zinc-300 border border-zinc-300 pt-1 pb-1 pl-4 pr-4 rounded-full hover:bg-zinc-600 transition-all cursor-pointer hover:-translate-y-1 active:translate-y-1">Avoir accès aux exercices corrigés</Link>
            </div>
        </div>
    );
}

export default Accueil