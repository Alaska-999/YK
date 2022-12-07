import React from 'react';
import s from './Start.module.css'
import logo from '../../images/Logo.png'
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";


const Start = () => {

    const nav = useNavigate()

    return (
        <div className={s.container}>
            <img className={s.logo} src={logo} alt="logo"/>
            <h2 className={s.heading}>
                BECOME A MORE CONSCIENTIOUS SHOPPER!
            </h2>
            <p className={s.description}>
                Scan products to find out how environmentally
                friendly and ethical the manufacturer is.
            </p>

            <Button onClick={()=> nav('/search')}>
                Start Scanning
            </Button>
        </div>
    );
};

export default Start;