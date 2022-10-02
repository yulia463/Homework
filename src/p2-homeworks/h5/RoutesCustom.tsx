import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import { Routes, Route } from 'react-router-dom'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function RoutesCustom() {
    // @ts-ignore
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            {/*<Switch>*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'}/>

                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>
            </Routes>
            {/*</Switch>*/}
        </div>
    );
}

export default RoutesCustom
