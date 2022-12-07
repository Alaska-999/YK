import React from 'react';
import Container from "../UI/Container/Container";
import s from './ProductCard.module.css'
// import {productItems} from '../../store'
// import {useParams} from "react-router-dom";

const ProductCard = (props) => {
    //пропс передаются в роутах

    //через useParams нарушается инкапсуляция так как есть доступ ко всем productItems
    // const params = useParams()
    // const productId = params.id
    // const item = productItems[params.id - 1]
    // console.log(item)

    const rateClass = () => {if(props.rate >=70) {
        return s.highRate
    } else if(props.rate >=50 ) {
        return  s.mediumRate
    } else return s.lowRate
    }
    const rateStyle = `${s.productRate} ${rateClass()}`

    return (
        <div className={s.productWrapper}>
            <Container className={s.productInner}>
                <div className={rateStyle}>{props.rate}%</div>
                <div className={s.productInfo}>
                    <div className={s.productText}>
                        <h1>HIGHLY ETHICAL</h1>
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                    </div>
                    <img className={s.productImg} src={'../../' + props.img} alt=""/>
                </div>
            </Container>

        <div className={s.buttonWrapper}>
            <button type='button' className={s.productBtn}>Rating Ditails</button>
            <button type='button' className={s.productBtn}>External Links</button>
        </div>
        </div>


    )
};

export default ProductCard;