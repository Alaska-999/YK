import React from 'react';
import Header from "./Header/Header";
import Search from "./Search/Search";
import FAQ from "./FAQ/FAQ";
import Favourites from "./Favourites/Favourites";
import {Routes, Route} from "react-router-dom";
import Start from "./Start/Start";
import ProductCard from "./ProductInfo/ProductCard";
import {productItems} from "../store";


const RoutesComp = () => {

    const productElementsRoutes = productItems.map(item => ({
            path: `/product/${item.id}`,
            element: <ProductCard {...item}/>
        }
    ))

    const routes = [
        {
            path: '/',
            element: <Start/>,

        }
    ]
    const routesWithHeader = [
        {
            path: '/search',
            element: <Search/>,

        },
        {
            path: '/favourites',
            element: <Favourites/>,

        },
        {
            path: '/faq',
            element: <FAQ/>,

        },
        {
            path: '/product/:id',
            element: <ProductCard/>,

        }
    ]
    return (
        <Routes>
            {productElementsRoutes.map((route) =>
                <Route path={route.path} key={route.path} element={
                    <>
                        <Header/>
                        {route.element}
                    </>
                }/>
            )}
            {routes.map((route) =>
                <Route path={route.path} element={route.element} key={route.path}/>
            )}
            {routesWithHeader.map((route) =>
                <Route path={route.path} key={route.path} element={
                    <>
                        <Header/>
                        {route.element}
                    </>
                }/>
            )}

        </Routes>

    );
};

export default RoutesComp;