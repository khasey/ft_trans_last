import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Game from "./component/Game";


function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
         {/* <Nav/> */}
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            {/* <Login/> */}
           <Game/>

        </>
    );
}

export default App;
