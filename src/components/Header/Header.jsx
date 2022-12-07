import React, {useState} from 'react';
import logo from '../../images/Logo.png'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Container from "../UI/Container/Container";
import {ReactComponent as HeartSvg} from '../../images/fi-bs-heart.svg'
import {ReactComponent as InterrogationSvg} from '../../images/fi-bs-interrogation.svg'
import {ReactComponent as SearchSvg} from '../../images/fi-bs-search.svg'

const Header = () => {

    return (
        <Container>
            <header className={s.header}>
            <img src={logo} className={s.headerLogo} alt="logo"/>
            <div className={s.navbar}>
                <NavLink to="/faq">
                    <InterrogationSvg/>
                </NavLink>
                <NavLink to="/favourites">
                    <HeartSvg/>
                </NavLink>
                <NavLink to="/search">
                    <SearchSvg/>
                </NavLink>
            </div>
            </header>
        </Container>
    );
};

export default Header;