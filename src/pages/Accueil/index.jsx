import Image from '../../assets/c.png'
import { Link } from 'react-router-dom';
import fleche from '../../assets/fleche.png'

function Accueil() {
    return (
        <div className=" flex-col flex lg:mr-56 lg:ml-56 lg:mt-20 mr-8 ml-8">




<div className="p-8 text-center sm:text-5xl poppins-bold lg:text-left text-3xl lg:w-2/3">Bienvenue sur Lgrndev</div>
            <div className='flex lg:flex-row justify-between flex-col items-center lg:items-start'>
            <p className='text-zinc-400 sm:w-2/3 p-4 sm:p-8 pt-8 pb-8'>
👋 Bienvenue sur <span className='text-white'>lgrndev</span> 🚀, un site bénévole créé par Lucas Langrand (@lgrndev)🌟 ! Sur ce site, vous trouverez les corrections de différentes matières proposées à l'Université Lyon1, destinées à vous aider dans vos études. Que ce soit en sciences, en mathématiques ou en informatique, <span className='text-white'>lgrndev</span> est là pour vous fournir des ressources de qualité et vous accompagner tout au long de votre parcours universitaire.
</p>

<div className='flex flex-col gap-4'>
<Link to='/exercices' className='bg-blue-600 p-4 pr-6 pl-6 rounded-full h-fit mr-10 hover:bg-blue-500 transition-all active:bg-blue-700 w-48 text-center'>Voir les corrigés</Link>

<img src={fleche} alt='fleche' className='w-32 h-32 -rotate-90 invert opacity-80 -ml-16 hidden lg:block'/>
</div>
</div>




            <div className='w-auto h-0.5 bg-gradient-to-r to-zinc-600 from-blue-500 mt-10'></div>


            <div className='flex items-center justify-center'>
            <div className="bg-zinc-800 p-8 rounded-xl mt-8 gap-10 flex flex-col shadow-zinc-950 shadow-lg">
                <div className=" text-center text-5xl titre flex flex-row justify-between">
                    <div>C++</div>
                    <img src={Image} alt="C++" className='size-10'></img>
                </div>
                <div className='w-56'>Language de programmation compilé permettant la programmation sous de multiples paradigmes, dont la programmation procédurale, la programmation orientée objet et la programmation générique.</div>
                <Link to='/exercices' className="text-zinc-300 border border-zinc-300 pt-1 pb-1 pl-4 pr-4 rounded-full hover:bg-zinc-600 transition-all cursor-pointer hover:-translate-y-1 active:translate-y-1">Acceder aux exercices corrigés</Link>
            </div>
            </div>
        </div>
    );
}

export default Accueil