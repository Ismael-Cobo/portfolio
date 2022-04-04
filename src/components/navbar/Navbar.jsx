import { useLayoutEffect, useRef, useState } from "react";

import { BsLinkedin, BsGithub, BsBook } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdPersonalVideo } from "react-icons/md";
import { IoPersonOutline, IoHomeOutline } from 'react-icons/io5'


import { useWindowSize } from "../../hook/useWindowSize";

import profileImg from '../../assets/img/stockimg.jpg'

import './Navbar.css'


export const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const [cross, setCross] = useState(true)
    const ref = useRef(null)
    const { width } = useWindowSize()

    useLayoutEffect(() => {

        if (visible || width >= '1200') {
            ref.current.style.left = '0'
        }
        else if (!visible && width < '1200') {
            ref.current.style.left = '-300px'
        }

    }, [visible, width])

    const handleClick = () => {
        setCross(!cross)
        setVisible(!visible)
    }

    const handleItemClick = () => {
        if (visible && width < '1200') {
            ref.current.style.left = '0'
            setVisible(false)
            setCross(true)
        }
    }


    return (
        <>
            <i onClick={handleClick} className="profile__icons__link navbarBurguer">{cross ? <GiHamburgerMenu /> : <ImCross />}</i>
            <header ref={ref} className='header'>
                <div className='header__container'>
                    <div className='header__profile'>
                        <img className='profile__img' src={profileImg} alt="Ismael Cobo Protafolio" />
                        <h3 className="profile__name">Ismael Cobo</h3>
                        <div className='profile__icons__content'>
                            <a className="profile__icons__link" href="https://www.linkedin.com/in/ismael-cobo-434465214/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
                            <a className="profile__icons__link" href="https://github.com/Ismael-Cobo" target='_blank' rel="noreferrer"><BsGithub /></a>
                        </div>
                    </div>
                    <div className="header__nav">
                        <ul className="header__nav__ul">
                            <li className="nav__item">
                                <a href="#home" onClick={handleItemClick}><i className="nav__icons"><IoHomeOutline /></i>Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" onClick={handleItemClick}><i className="nav__icons"><IoPersonOutline /></i>Sobre mí</a>
                            </li>
                            <li className="nav__item">
                                <a href="#resume" onClick={handleItemClick}><i className="nav__icons"><AiOutlineFile /></i>Currículum</a>
                            </li>
                            <li className="nav__item">
                                <a href="#projects" onClick={handleItemClick}><i className="nav__icons"><BsBook /></i>Proyectos</a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" onClick={handleItemClick}><i className="nav__icons"><MdPersonalVideo /></i>Tecnologías</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
