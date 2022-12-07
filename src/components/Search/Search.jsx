import React, {useEffect, useRef, useState} from 'react';
import Container from "../UI/Container/Container";
import Input from "../UI/Input/Input";
import s from './Search.module.css'
import {Link} from "react-router-dom";
import Camera, { FACING_MODES }from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';



const Search = () => {
    const [searchValue, setSearchValue] = useState('');

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
            <div className={s.alternativeText}>
                Browse
            </div>
            <div className={s.barcodeScanner}>
            <Camera
                idealFacingMode = {FACING_MODES.ENVIRONMENT}
                idealResolution = {{width: 350, height: 362}} ></Camera>
            </div>
            <div className={s.barcodeScannerBtn}>
                Barcode Scanner
            </div>

            <p>Place camera above the barcode to scan a product</p>
            <Link className={s.button} to={'/favourites'}>Previous Scans</Link>

        </Container>
    );
};

export default Search;