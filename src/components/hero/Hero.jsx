import { AiOutlineDownload } from 'react-icons/ai'

import cv from '../../assets/pdf/cv_ismael_cobo.pdf'

import './Hero.css'


export const Hero = () => {
    return (
        <section className='hero' id='home'>
            <div className='hero__text'>
                <h3 className='hero__title'>Hola 👋🏼, soy</h3>
                <h2 className='hero__name'>Ismael Cobo</h2>
                <h2 className='hero__title'>Desarrollador Frontend</h2>
                <a className='hero__cv' href={cv}>Currículum <AiOutlineDownload /></a>
                {/* <p className='hero__desc'>Desarrollador JavaScript con 10+ años de experiencia. Actualmente formador y divulgador en tecnologías web a través de YouTube, dónde ya somos más de 60,000!</p> */}
            </div>
        </section>
    )
}
