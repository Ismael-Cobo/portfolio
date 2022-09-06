import { AiOutlineArrowRight } from 'react-icons/ai'

import cv from '../../assets/pdf/ismael_cv.pdf'

import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero__text'>
        <h3 className='hero__title'>Hola 👋🏼, soy</h3>
        <h2 className='hero__name'>Ismael Cobo</h2>
        <h2 className='hero__title'>Desarrollador Frontend</h2>
        <a className='hero__cv' href={cv}>
          Currículum <AiOutlineArrowRight />
        </a>
      </div>
    </section>
  )
}
