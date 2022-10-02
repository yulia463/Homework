import React from 'react'
import Header from './Header'
import RoutesCustom from './RoutesCustom'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <RoutesCustom/>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
