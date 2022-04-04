import { BsGithub } from 'react-icons/bs'
import { MdLiveTv } from 'react-icons/md'

import './project.css'

import gifApp from '../../assets/portfolio/gifExpertApp.PNG'
import todoApp from '../../assets/portfolio/todoApp.PNG'
import heroesApp from '../../assets/portfolio/heroesApp.PNG'
import calendario from '../../assets/portfolio/calendario.PNG'

export const Project = () => {
    return (
        <div id='projects' className='white_box white_box_no_p'>
            <h2>Proyectos destacados</h2>
            <div className='projects__content'>
                <div className='project'>
                    <div className='project__text__content'>
                        <h3 className='project__title'>Giff App</h3>
                        <h4 className='project__tech'>React, jest, enzyne</h4>
                        <p className='project__desc'>Buscador de gifs, escribes el gif que quieras buscar y te salen 10 resultados.</p>
                        <p className='project__desc'>Funciona consumiendo la api de giphy.</p>
                    </div>
                    <img className='project__img' src={gifApp} alt="gif expert app img" />
                    <div className='project__icon__content'>
                        <a className='project__icon' href="https://github.com/Ismael-Cobo/react-gifexpertapp" target='_blank' rel='noreferrer'> <BsGithub /> github</a>
                        <a className='project__icon' href="https://ismael-cobo.github.io/react-gifexpertapp/" target='_blank' rel='noreferrer'> <MdLiveTv /> live demo</a>
                    </div>
                </div>
                <div className='project'>
                    <div className='project__text__content'>
                        <h3 className='project__title'>ToDO App</h3>
                        <h4 className='project__tech'>React, jest, enzyne</h4>
                        <p className='project__desc'>Es una aplicación que funciona como una lista de tareas, donde puedes añadir tareas, marcarlas como completadas y eliminarlas.</p>
                    </div>
                    <img className='project__img' src={todoApp} alt="todoapp img" />
                    <div className='project__icon__content'>
                        <a className='project__icon' href="https://github.com/Ismael-Cobo/ToDO-app-and-tests" target='_blank' rel='noreferrer'> <BsGithub /> github</a>
                        <a className='project__icon' href="https://aesthetic-praline-be21ac.netlify.app/" target='_blank' rel='noreferrer'> <MdLiveTv /> live demo</a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project__text__content'>
                        <h3 className='project__title'>Heroes App</h3>
                        <h4 className='project__tech'>React, react-router-dom, context, jest, enzyne</h4>
                        <p className='project__desc'>Aplicación que te muestra un listado con heroes y si haces clic puedes ver los detalles de cada heroe.</p>
                        <p className='project__desc'>Además, tiene un buscador para buscar heroes.</p>
                    </div>
                    <img className='project__img' src={heroesApp} alt="heroes app img" />
                    <div className='project__icon__content'>
                        <a className='project__icon' href="https://github.com/Ismael-Cobo/heroeApp" target='_blank' rel='noreferrer'> <BsGithub /> github</a>
                        <a className='project__icon' href="https://adorable-meerkat-f12afe.netlify.app/" target='_blank' rel='noreferrer'> <MdLiveTv /> live demo</a>
                    </div>
                </div>
                <div className='project'>
                    <div className='project__text__content'>
                        <h3 className='project__title'>Calendar App</h3>
                        <h4 className='project__tech'>React, redux, node, mongodb</h4>
                        <p className='project__desc'>Calendario con un login y un register en mongodb.</p>
                        <p className='project__desc'>En el calendario puedes crear, actualizar, ver y eliminar eventos.</p>
                        <p className='project__desc'>Por último,un componente de notificaciones personalizadas que funciona con redux.</p>
                        <p>deploying...</p>
                    </div>
                    <img className='project__img' src={calendario} alt="calendar app img" />
                    <div className='project__icon__content'>
                        <a className='project__icon' href="google.es" target='_blank' rel='noreferrer'> <BsGithub /> github</a>
                        <a className='project__icon' href="google.es" target='_blank' rel='noreferrer'> <MdLiveTv /> live demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
