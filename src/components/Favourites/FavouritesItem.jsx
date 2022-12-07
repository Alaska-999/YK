import React from 'react';
import s from './FavouritesItem.module.css'
import {Link} from "react-router-dom";

const FavouritesItem = (props) => {

    const rateClass = () => {if(props.rate >=70) {
            return s.highRate
        } else if(props.rate >=50 ) {
            return  s.mediumRate
        } else return s.lowRate
    }
    const classes = `${s.itemRate} ${rateClass()}`


    return (
        <div className={s.itemCard}>
            <img className={s.itemImage}
                 src={props.img}
                 alt="product photo"
            />
            <div className={s.itemInfo}>
                <div className={s.itemName}>{props.name}</div>
                <Link to={`/product/${props.id}`}
                      className={s.itemBtn}

                >More Info</Link>
            </div>
            <div className={classes}>{props.rate}%</div>

        </div>
    );
};

export default FavouritesItem;