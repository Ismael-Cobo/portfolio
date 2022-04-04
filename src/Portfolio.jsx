import { About, Hero, Navbar, Project, Resume, Skills,  } from './components'

import './portafolio.css'

export const Portfolio = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <div className='section'>
                <About />
            </div>

            <div className='section'>
                <Resume />
            </div>

            <div className='section'>
                <Project />
            </div>

            <div className='section mb-3rem'>
                <Skills />
            </div>
        </>
    )
}
