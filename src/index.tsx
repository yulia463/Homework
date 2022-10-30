import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import * as serviceWorker from './serviceWorker'
import {HashRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    (<HashRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </HashRouter>)
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
