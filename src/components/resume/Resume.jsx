import './resume.css'

export const Resume = () => {
    return (
        <div className='resume white_box' id='resume'>
            <h2 className='resume__title'>Currículum</h2>
            <div className='resume__content'>
                <div className='resume__study__content'>
                    <h3 className='study__title'>Estudios realizados</h3>
                    <div className='study__graphic'>
                        <h4 className='study__secundary_title'>Desarrollo de aplicaciones web</h4>
                        <p className='study__time'>2019 - 2021</p>
                        <p className='study__school'>Tarragona, Catalunya</p>
                        

                    </div>
                    <div className='study__certificates'>
                        <h4>Cursos online</h4>
                        <div className='certificates__content'>
                            <div className='certificates__text'>
                                <p className='study__time'>2021</p> <a href='https://www.udemy.com/course/react-cero-experto/' target='_blank' rel="noreferrer">React: De cero a experto</a>
                            </div>
                            <div className='certificates__text'>
                                <p className='study__time'> 2022 - presente</p> <a href='https://www.udemy.com/course/react-pro/' target='_blank' rel="noreferrer">React PRO: Lleva tus bases al siguiente nivel</a>
                            </div>
                            <div className='certificates__text'>
                                <p className='study__time'>2022</p> <a href='https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/' target='_blank' rel="noreferrer">CSS La Guía Completa</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='resume__study__content'>
                    <h3 className='study__title'>Experiencia laboral</h3>
                    <div className='study__graphic'>
                        <h4 className='study__secundary_title'>Enveseur</h4>
                        <p className='study__time'>2021 - 2021</p>
                        <p className='study__school'>Vilanova i la Geltrú, Barcelona</p>
                        <p className='study__desc'>En los 6 meses que estuve trabajando aprendí lo que es el trabajo en equipo, la comunicación entre los compañeros y el debate sobre las posibles soluciones a los problemas.</p>
                        <p className='study__desc'>Ayudé en el desarrollo de una aplicación para las vacaciones de los empleados y otra para que estos puedan fichar cuando entran y salen de su trabajo.</p>
                        <div className='study__tech__icons__content'>
                            <p className='tech__icon'>PHP</p>
                            <p className='tech__icon'>JavaScript</p>
                            <p className='tech__icon'>JQuery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
