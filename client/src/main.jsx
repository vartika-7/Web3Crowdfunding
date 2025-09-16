import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {ChainId, ThirdwebProvider} from "@thirdweb-dev/react";
import App from "./App";
import "./index.css";
import { StateContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain="sepolia"
        clientId="d12cb83d031d07e0952b80e0a286f6e6"
        chainId={ChainId.Sepolia}>
        <Router>
            <StateContextProvider>
              <App />
            </StateContextProvider>         
        </Router>
    </ThirdwebProvider>
);   