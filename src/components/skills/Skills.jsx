import { FaReact } from 'react-icons/fa'
import { SiRedux, SiJest, SiTestinglibrary, SiAirbnb, SiNestjs, SiNextdotjs, SiTypescript } from 'react-icons/si'

import './skills.css'


export const Skills = () => {
    return (
        <div className="white_box " id="skills">
            <h2>Tecnologías</h2>

            <p className="skills__desc">Estas son las tecnologías o herramientas con las que he trabajado recientemente, o las cuales tengo interés.</p>
            <div className='frameworks__content'>
                <h3>Frameworks/Librerías</h3>
                <div className='framewrks__cards'>
                    <div className='framework__card'>
                        <FaReact className='framework__icon' />
                        <p>React</p>
                    </div>
                    <div className='framework__card'>
                        <SiRedux className='framework__icon' />
                        <p>Redux</p>
                    </div>
                </div>
            </div>

            <div className='frameworks__content'>
                <h3>Testing</h3>
                <div className='framewrks__cards'>
                    <div className='framework__card'>
                        <SiJest className='framework__icon' />
                        <p>Jest</p>
                    </div>
                    <div className='framework__card'>
                        <SiTestinglibrary className='framework__icon' />
                        <p>Testing Library</p>
                    </div>
                    <div className='framework__card'>
                        <SiAirbnb className='framework__icon' />
                        <p>Enzyme</p>
                    </div>
                </div>
            </div>

            <div className='frameworks__content'>
                <h3>Interés</h3>
                <div className='framewrks__cards'>
                    <div className='framework__card'>
                        <SiNestjs className='framework__icon' />
                        <p>Nest</p>
                    </div>
                    <div className='framework__card'>
                        <SiNextdotjs className='framework__icon' />
                        <p>Next</p>
                    </div>
                    <div className='framework__card'>
                        <SiTypescript className='framework__icon' />
                        <p>Typescript</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
