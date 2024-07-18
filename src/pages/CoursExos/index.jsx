import React from 'react';
import { Link } from 'react-router-dom';
import './../Accueil/card.css';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
import { listeCours } from '../../data/listeCours';



function Exercices() {

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
    <div className='m-4 sm:m-20'>

        <div className='text-4xl poppins-bold text-white text-center'>Cours / Exercices</div>

      <div className='flex flex-col flex-wrap md:flex-row justify-center gap-20 items-center mt-16'>
           

      {listeCours.map(function (cours) {
                return (
                    <div class="card relative" ref={el => tiltRefs.current[cours.id] = el} data-tilt data-tilt-perspective="1500">
                        <div className={`absolute right-2 poppins-bold text-sm top-2 pt-1 pb-1 pr-2 pl-2 rounded-md ${cours.type === 'disponible' && "bg-green-600"}`}>{cours.type === 'disponible' && "Disponible"} </div>
                        <div className={`absolute right-2 poppins-bold text-sm top-2 pt-1 pb-1 pr-2 pl-2 rounded-md ${cours.type === 'non-disponible' && "bg-red-800"}`}>{cours.type === 'non-disponible' && "Coming Soon"} </div>
                        <div class={`card-image ${cours.image}`} ></div>
                        <div class="card-text">
                            <span class="date">{cours.date}</span>
                            <h2 className='text-xl poppins-bold'>{cours.titre}</h2>
                            <p>{cours.description}</p>
                        </div>
                        <div className='flex flex-row'>
                            <Link to={cours.liencours} className='w-screen border-r-2 border-r-blue-200 mt-8 poppins-bold bg-blue-600 hover:bg-blue-800 transition-all rounded-bl-2xl  text-center justify-center items-center flex'>{cours["button-text-cours"]}</Link>
                            <Link to={cours.lienexos} className='w-screen mt-8 poppins-bold bg-blue-600 hover:bg-blue-800 transition-all rounded-br-2xl  text-center justify-center items-center flex'>{cours["button-text-exos"]}</Link>
                        </div>
                    </div>
                )
            })}


           </div>
    </div>
  );
}

export default Exercices;