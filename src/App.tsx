import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Game from "./component/Game";
import Scoreboard from "./component/Scoreboard";
import Rules from "./component/Rules";
import Credits from "./component/Credits";


function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
         <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="game" element={<><><Nav /></><Game /></>}/>
            <Route path="score" element={<><><Nav/></><Scoreboard/></>}></Route>
            <Route path="rules" element={<><><Nav/></><Rules/></>}></Route>
            <Route path="credits" element={<><><Nav/></><Credits/></>}></Route>
         </Routes>
         <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
        </>
    );
}

export default App;
