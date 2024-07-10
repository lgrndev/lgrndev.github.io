import { Link } from 'react-router-dom'
import '../../styles/BasicStyle.css'

function Footer () {
    return (
        <div className='lg:ml-40 lg:mr-40 lg:mt-20 md:ml-20 md:mr-20 md:mt-10 ml-8 mr-8 mt-4 mb-8'>
            <div className="h-0.5 w-auto bg-zinc-800  mt-8 mb-4"></div>
            <div className='flex flex-col justify-between mt-8 md:flex-row items-center gap-4 sm:gap-2'>
                <div className='text-zinc-300 flex flex-row md:gap-10 text-sm gap-4'>
                    <Link to="/">Accueil</Link>
                    <Link to="/exercices">Exercices</Link>
                    <Link to="/apropos">A propos</Link>
                </div>

                <div className='text-zinc-400 text-sm'>
                    © 2024 Lgrndev. Tous droits reservés.
                </div>
            </div>
        </div>
    )
}

export default Footer