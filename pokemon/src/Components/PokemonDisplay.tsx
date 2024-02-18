import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Pokemon } from '../ts/Interfaces';
import { getJSONData } from '../ts/PokemonAPI';
import { addAlphaToColor, getPokemonFinalColor } from '../ts/Utilities';
import PokemonAbilityDisplay from './PokemonAbilityDisplay';
import PokemonStatsDisplay from './PokemonStatsDisplay';
import PokemonTypeDisplay from './PokemonTypeDisplay';

const PokemonDisplay = (props: { containerDiv: HTMLDivElement, glassBGColor: string }) => {

    const { search } = useLocation();
    const bgColorTransparency: number = 0.3;
    const borderTransparency: number = 0.5;

    const pokemonDataURL: string = (search as string).substring(1);

    const pokemonDisplayContainer = useRef<HTMLDivElement>(null);

    const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

    useEffect(() => {
        getJSONData<Pokemon>(pokemonDataURL, setPokemonData);
    }, [pokemonDataURL]);


    useEffect(() => {
        if (pokemonData) {
            let cardMainColor = getPokemonFinalColor(pokemonData.types);
            const containerBGColor = addAlphaToColor(cardMainColor, bgColorTransparency);
            const containerBorderColor = addAlphaToColor(cardMainColor, borderTransparency);

            if (props.containerDiv) {
                props.containerDiv.style.setProperty('--container-bg-gradient-color', containerBGColor);
            } else {
                (document.getElementById('containerDiv') as HTMLDivElement).style.setProperty('--container-bg-gradient-color', containerBGColor);
            }

            pokemonDisplayContainer.current?.style.setProperty('--main-color', cardMainColor);
            pokemonDisplayContainer.current?.style.setProperty('--border-color', containerBorderColor);
            pokemonDisplayContainer.current?.style.setProperty('--bg-color', props.glassBGColor);
        }
    }, [props, pokemonData]);

    if (pokemonData === null) return <></>
    return (
        <div className='relative min-h-[80vh] p-6 md:mx-12 mt-6'>
            <div ref={pokemonDisplayContainer} className='p-6 relative h-full rounded-xl bg-[color:var(--bg-color)] border-[1px] border-[color:var(--border-color)] backdrop-blur-3xl'>
                <div className=' w-40 h-40 sm:w-80 sm:h-80 mx-auto rounded-[50%] bg-gradient-to-b to-transparent from-[rgba(255,255,255,0.1)] scale-95'>
                    <img
                        src={pokemonData.sprites.other.dream_world.front_default as string}
                        alt={pokemonData.name}
                        loading='lazy'
                        className='w-full h-full scale-105'
                    />
                </div>
                <h1 className='p-4 mt-4 capitalize text-4xl font-semibold text-center'>{pokemonData.name}</h1>
                <span className='flex justify-center items-center gap-5 mb-14'>
                    {
                        pokemonData.types.map((typeData, index) => (
                            <PokemonTypeDisplay typeData={typeData} key={pokemonData.id + index} />
                        ))
                    }
                </span>

                <div className='mt-5 grid grid-cols-1 xl:grid-cols-3 px-3 lg:px-40 xl:gap-20 '>
                    <div className='xl:col-start-2 xl:col-span-full'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo, optio nam eligendi aliquam, consequuntur quae sequi sint repellat illum ut at fugit rerum commodi in natus nihil pariatur soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione neque excepturi, exercitationem, similique consequuntur reprehenderit doloremque iure quia, nam iste tempore pariatur quasi. Maiores sunt ex ducimus alias sapiente quo consectetur doloribus id sequi voluptate ipsa laboriosam expedita, molestiae nobis aliquid est corrupti quia hic accusamus qui. Recusandae, veniam!</p>
                    </div>
                    <div className='xl:col-start-1 xl:row-start-1 xl:row-span-2 group justify-self-center flex justify-center w-full h-min py-5 pb-8 my-4 rounded-xl bg-[color:var(--bg-color)] border-[1px] border-[color:var(--border-color)]'>
                        <div className='flex flex-col gap-4 max-w-48 mx-10'>
                            <h1 className='text-center opacity-30 transition tracking-wide group-hover:opacity-75'>STATS</h1>
                            {
                                pokemonData.stats.map((statData, index) => (
                                    <>
                                        {(index !== 0) ? <hr className='opacity-20 w-full' key={`hr-${pokemonData.id + index}`} /> : <></>}
                                        <PokemonStatsDisplay statData={statData} key={`data-${pokemonData.id + index}`} />
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    {/* <div className='xl:col-span-2 w-full h-min pb-8 my-4 flex xl:flex-col flex-col-reverse gap-8'> */}
                    <div className='xl:col-start-2 xl:col-span-full group justify-self-center flex justify-center w-full py-10 rounded-xl bg-[color:var(--bg-color)] border-[1px] border-[color:var(--border-color)]'>
                        <div className='flex flex-col gap-4 w-full mx-10'>
                            <h1 className='text-center opacity-30 transition tracking-wide group-hover:opacity-75'>ABILITIES</h1>
                            {
                                pokemonData.abilities.map((abilityData, index) => (
                                    <>
                                        {(index !== 0) ? <hr className='opacity-20 col-span-full' key={`hr-${pokemonData.id + index}`} /> : <></>}
                                        <PokemonAbilityDisplay abilityLink={abilityData.ability.url} key={`data-${pokemonData.id + index}`} />
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default PokemonDisplay