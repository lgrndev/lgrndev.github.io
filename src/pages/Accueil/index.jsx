import React from 'react';
import { Link } from 'react-router-dom';
import fleche from '../../assets/fleche.png';
import styled from 'styled-components';
import './card.css';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
import { listeCours } from '../../data/listeCours';

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
    background: linear-gradient(145deg, #3B82F6, #90b3ee);
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


function Accueil() {

    const tiltRefs = useRef([]);

    useEffect(() => {
        tiltRefs.current.forEach((tiltRef) => {
            VanillaTilt.init(tiltRef, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.5,
            });
        });

        return () => {
            tiltRefs.current.forEach((tiltRef) => {
                if (tiltRef && tiltRef.vanillaTilt) {
                    tiltRef.vanillaTilt.destroy();
                }
            });
        };
    }, []);

    return (
        <div className=" flex-col flex lg:mr-56 lg:ml-56 lg:mt-20 mr-8 ml-8">
            <div className="p-8 text-center sm:text-5xl poppins-bold lg:text-left text-3xl lg:w-2/3 text-blue-50">Bienvenue sur Lgrndev</div>
            <div className='flex lg:flex-row justify-between flex-col items-center lg:items-start'>
                <p className='text-zinc-400 sm:w-2/3 p-4 sm:p-8 pt-8 pb-8'>
                    👋 Bienvenue sur <span className='text-blue-50'>lgrndev</span> 🚀, un site bénévole créé par Lucas Langrand (@lgrndev)🌟 ! Sur ce site, vous trouverez les corrections de différentes matières proposées à l'Université Lyon1, destinées à vous aider dans vos études. Que ce soit en sciences, en mathématiques ou en informatique, <span className='text-blue-50'>lgrndev</span> est là pour vous fournir des ressources de qualité et vous accompagner tout au long de votre parcours universitaire.
                    <br/>
                    <br/>Contactez moi sur mon e-mail : <a href='mailto:lucas.langrand@etu.univ-lyon1.fr?body=Mes cours - Lgrndev' className='text-blue-50'>lucas.langrand@etu.univ-lyon1.fr</a> pour me proposer vos cours/exercices corrigés !
                </p>

                <div className='flex flex-col gap-4'>
                    <StyledLink to='/cours/cpp' className='bg-blue-600 text-white p-4 pr-6 pl-6 rounded-full h-fit mr-10 hover:bg-blue-500 transition-all active:bg-blue-700  text-center poppins-bold'>Voir les corrigés de C++</StyledLink>
                    <img src={fleche} alt='fleche' className='w-32 h-32 -rotate-90 invert opacity-80 -ml-16 hidden lg:block' />
                </div>
            </div>

            <div className='w-auto h-0.5 bg-gradient-to-r to-zinc-600 from-blue-500 mt-10'></div>

            <div className='flex flex-col flex-wrap md:flex-row justify-center gap-20 items-center mt-16'>
           

            {listeCours.slice(0,3).map(function (cours) {
                return (
                    <div class="card relative" ref={el => tiltRefs.current[cours.id] = el} data-tilt data-tilt-perspective="1500">
                        <div className='absolute right-2 poppins-bold text-sm top-2 bg-zinc-800 pt-1 pb-1 pr-2 pl-2 rounded-md'>{cours.type === 'exercices' && "Exercices"} </div>
                        <div className='absolute right-2 poppins-bold text-sm top-2 bg-zinc-800 pt-1 pb-1 pr-2 pl-2 rounded-md'>{cours.type === 'cours' && "Cours"} </div>
                        <div class={`card-image ${cours.image}`} ></div>
                        <div class="card-text">
                            <span class="date">{cours.date}</span>
                            <h2 className='text-xl poppins-bold'>{cours.titre}</h2>
                            <p>{cours.description}</p>
                        </div>
                        <Link to={cours.lien} className='card-stats mt-8 poppins-bold bg-blue-600 hover:bg-blue-800 transition-all rounded-br-2xl rounded-bl-2xl text-center justify-center items-center flex'>{cours["button-text"]}</Link>
                    </div>
                )
            })}

            <div className='text-white poppins-bold text-xl'>
                Etc...
            </div>


            </div>

        </div>
    );
}

export default Accueil;
