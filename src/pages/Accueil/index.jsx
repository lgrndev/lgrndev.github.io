import Image from '../../assets/c.png'
import { Link } from 'react-router-dom';
import fleche from '../../assets/fleche.png'
import styled from 'styled-components';

/* const StyledLink = styled(Link)`
    animation: bounceShadow 2s infinite ease-in-out;
    @keyframes bounceShadow {
            0%, 100% {
                box-shadow: 0px 0px 25px white,inset 0px 0px 7px white;
            }
            50% {
                box-shadow: 0px 0px 15px white,inset 0px 0px 7px white;
            }
        }
    &:hover {
        transform: scale(1.03);
        transition: all 0.6s ease;
    }
        
` */

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block; // Pour que le pseudo-élément ::before soit positionné correctement

  box-shadow: inset 0px 0px 10px lightblue;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(145deg, #706eff, #faff61);
    z-index: -1;
    border-radius: inherit;
    filter: blur(10px);
    opacity: 1; // Toujours visible
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: scale(0.95); // Taille initiale légèrement réduite
    animation: bounceBackground 2s infinite; // Animation de rebond en continu;
    opacity: 70%;
  }

  @keyframes bounceBackground {
    0% { transform: scale(0.95); }
    50% { transform: scale(1.05); }
    100% { transform: scale(0.95); }
  }

`;

const StyledBox = styled.div`
    position: relative;
    &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(145deg, #706eff, #faff61);
    z-index: -1;
    border-radius: inherit;
    filter: blur(10px);
    opacity: 0; // Initially hidden
    transition: opacity 0.3s ease, transform 0.3s ease; // Add transition properties
    transform: scale(0.95); // Slightly scale down initially
  }

  &:hover::before {
    opacity: 70%; // Fade in on hover
    transform: scale(1); // Scale up to normal size on hover
  }
    `

function Accueil() {
    return (
        <div className=" flex-col flex lg:mr-56 lg:ml-56 lg:mt-20 mr-8 ml-8">




<div className="p-8 text-center sm:text-5xl poppins-bold lg:text-left text-3xl lg:w-2/3 text-blue-50">Bienvenue sur Lgrndev</div>
            <div className='flex lg:flex-row justify-between flex-col items-center lg:items-start'>
            <p className='text-zinc-400 sm:w-2/3 p-4 sm:p-8 pt-8 pb-8'>
👋 Bienvenue sur <span className='text-blue-50'>lgrndev</span> 🚀, un site bénévole créé par Lucas Langrand (@lgrndev)🌟 ! Sur ce site, vous trouverez les corrections de différentes matières proposées à l'Université Lyon1, destinées à vous aider dans vos études. Que ce soit en sciences, en mathématiques ou en informatique, <span className='text-blue-50'>lgrndev</span> est là pour vous fournir des ressources de qualité et vous accompagner tout au long de votre parcours universitaire.
</p>

<div className='flex flex-col gap-4'>
<StyledLink to='/exercices' className='bg-blue-600 p-4 pr-6 pl-6 rounded-full h-fit mr-10 hover:bg-blue-500 transition-all active:bg-blue-700 w-48 text-center poppins-bold'>Voir les corrigés</StyledLink>

<img src={fleche} alt='fleche' className='w-32 h-32 -rotate-90 invert opacity-80 -ml-16 hidden lg:block'/>
</div>
</div>




            <div className='w-auto h-0.5 bg-gradient-to-r to-zinc-600 from-blue-500 mt-10'></div>


            <div className='flex items-center justify-center'>
            <StyledBox className="bg-zinc-800 p-8 rounded-xl mt-8 gap-10 flex flex-col border border-zinc-700 transition-all duration-500">
                <div className=" text-center text-5xl titre flex flex-row justify-between">
                    <div>C++</div>
                    <img src={Image} alt="C++" className='size-10'></img>
                </div>
                <div className='w-56'>Language de programmation compilé permettant la programmation sous de multiples paradigmes, dont la programmation procédurale, la programmation orientée objet et la programmation générique.</div>
                <Link to='/exercices' className="text-zinc-300 border border-zinc-300 pt-1 pb-1 pl-4 pr-4 rounded-full hover:bg-zinc-600 transition-all cursor-pointer hover:-translate-y-1 active:translate-y-1">Acceder aux exercices corrigés</Link>
            </StyledBox>
            </div>
        </div>
    );
}

export default Accueil