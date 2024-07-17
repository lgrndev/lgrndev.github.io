import React from 'react';
import Image from '../../assets/c.png';
import { Link } from 'react-router-dom';
import fleche from '../../assets/fleche.png';
import styled from 'styled-components';
import './card.css';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

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
                </p>

                <div className='flex flex-col gap-4'>
                    <StyledLink to='/exercices' className='bg-blue-600 text-white p-4 pr-6 pl-6 rounded-full h-fit mr-10 hover:bg-blue-500 transition-all active:bg-blue-700 w-48 text-center poppins-bold'>Voir les corrigés</StyledLink>
                    <img src={fleche} alt='fleche' className='w-32 h-32 -rotate-90 invert opacity-80 -ml-16 hidden lg:block' />
                </div>
            </div>

            <div className='w-auto h-0.5 bg-gradient-to-r to-zinc-600 from-blue-500 mt-10'></div>

            <div className='flex flex-col md:flex-row justify-center gap-20 items-center mt-6'>
            <div class="card" ref={el => tiltRefs.current[0] = el} data-tilt>
                <div class="card-image card-image1" ></div>
                <div class="card-text">
                    <span class="date">Mis à jour il y a 2 jours</span>
                    <h2 className='text-xl font-bold poppins-bold'>Introduction au C++</h2>
                    <p>Language de programmation compilé permettant la programmation sous de multiples paradigmes, dont la programmation procédurale, la programmation orientée objet et la programmation générique.</p>
                </div>
                <div class="card-stats mt-8">
                    <Link to={"/exercices"} className='border pt-1 pb-1 pr-6 pl-6 rounded-full border-zinc-600 bg-blue-600 poppins-bold hover:bg-blue-800 transition-all text-sm'>Voir les corrigés</Link>
                </div>
            </div>

            <div class="card" ref={el => tiltRefs.current[1] = el} data-tilt>
                <div class="card-image card-image2" ></div>
                <div class="card-text">
                    <span class="date">Coming Soon...</span>
                    <h2 className='text-xl poppins-bold'>DataScience - Python</h2>
                    <p>La science des données avec Python utilise des bibliothèques puissantes pour analyser et visualiser les données, facilitant ainsi la prise de décisions basées sur des insights approfondis..</p>
                </div>
                <div class="card-stats mt-8">
                    <Link to={"/"} className='border pt-1 pb-1 pr-6 pl-6 rounded-full border-zinc-600 bg-blue-600 poppins-bold hover:bg-blue-800 transition-all text-sm'>Bientôt !</Link>
                </div>
            </div>

            </div>

        </div>
    );
}

export default Accueil;
