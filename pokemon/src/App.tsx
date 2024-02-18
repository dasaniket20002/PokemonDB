import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { getJSONData } from './ts/PokemonAPI'
import { MainRequestData } from './ts/Interfaces';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import PokemonDisplay from './Components/PokemonDisplay';
import Footer from './Components/Footer';

const pokeapi: string = 'https://pokeapi.co/api/v2/pokemon';

function App() {

    const [mainRequestData, setMainRequestData] = useState<MainRequestData | null>(null);
    useEffect(() => {
        getJSONData<MainRequestData>(pokeapi, setMainRequestData);
    }, []);

    const containerDiv = useRef<HTMLDivElement>(null);

    const initialBGColor = 'rgba(4,0,50,1)';
    const glassBGColor = '#ffffff17';

    return (
        <div
            ref={containerDiv}
            className="App max-w-screen min-h-screen bg-surface-gradient bg-no-repeat animate-bg-to-top-on-load bg-black text-primary-color"
            id='containerDiv'
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Home mainRequestData={mainRequestData} containerDiv={containerDiv.current as HTMLDivElement} initialBGColor={initialBGColor} glassBGColor={glassBGColor} />} />
                        <Route path="about" element={<About />} />
                        <Route path='pokemon' element={<PokemonDisplay containerDiv={containerDiv.current as HTMLDivElement} glassBGColor={glassBGColor} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
