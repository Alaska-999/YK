import React from 'react';
import s from './FAQCard.module.css'

const FaqCard = (props) => {
    return (
        <div className={s.card}>
            {props.text}
        </div>
    );
};

export default FaqCard;