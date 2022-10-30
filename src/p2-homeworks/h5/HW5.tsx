import React from 'react'
import Header from './Header'
import RoutesCustom from './RoutesCustom'
import {HashRouter} from "react-router-dom";
import Pages from "../h5-rrd-v6/Pages";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5
