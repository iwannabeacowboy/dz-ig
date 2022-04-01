import React from 'react'
import {createRoot} from "react-dom/client";
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import * as serviceWorker from './serviceWorker'

// igg2

export const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(<App/>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
