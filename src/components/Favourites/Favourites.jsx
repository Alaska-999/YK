import React, {useState} from 'react';
import Container from "../UI/Container/Container";
import s from "../Search/Search.module.css";
import Input from "../UI/Input/Input";
import {ReactComponent as SearchSvg} from "../../images/fi-bs-search.svg";

import FavouritesItem from "./FavouritesItem";
import {productItems} from "../../store";


const Favourites = () => {
    const [searchValue, setSearchValue] = useState('')

    const valueChangeHandler = (event) => {
        setSearchValue(event.target.value)
    }



    return (
        <Container className={s.search}>
            <Input type='text'
                   placeholder={`Product or company name`}
                   value={searchValue.value}
                   onChange={valueChangeHandler}
            />

            {productItems.map (item => <FavouritesItem
                name={item.name}
                id={item.id}
                key={item.id}
                img={item.img}
                rate={item.rate}
            /> )}

        </Container>
    );
};

export default Favourites;