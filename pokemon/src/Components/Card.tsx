import React, { useState, useEffect, useRef } from 'react'
import { NameURLPair, Pokemon } from '../ts/Interfaces'
import { getJSONData } from '../ts/PokemonAPI'
import { addAlphaToColor, capitalizeFirstLetter, getPokemonFinalColor } from '../ts/Utilities'
import { Link } from 'react-router-dom'

const Card = (props: { cardData: NameURLPair, glassBGColor: string }): JSX.Element => {

    const cardBorderTransparency: number = 0.5;
    const cardShadowTransparency: number = 0.6;

    const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
    const cardElement = useRef<HTMLDivElement>(null);
    const cardShadowElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getJSONData<Pokemon>(props.cardData.url, setPokemonData);
    }, [props.cardData]);
    useEffect(() => {
        if (pokemonData) {
            let cardMainColor = getPokemonFinalColor(pokemonData.types);
            const cardBorderColor = addAlphaToColor(cardMainColor, cardBorderTransparency);
            const cardShadowColor = addAlphaToColor(cardMainColor, cardShadowTransparency);

            cardElement.current?.style.setProperty('--border-color', cardBorderColor);
            cardElement.current?.style.setProperty('--bg-color', props.glassBGColor);

            cardShadowElement.current?.style.setProperty('--tw-shadow-color', cardShadowColor);

        }
    }, [pokemonData, props.glassBGColor]);

    if (pokemonData === null) return <></>
    return (
        <Link to={{ pathname: 'pokemon', search: props.cardData.url }} key={pokemonData.id}>
            <div ref={cardElement}
                className='group relative w-64 h-96 py-7 px-5 mx-auto cursor-pointer grid self-center hover:scale-110 transition rounded-xl bg-[color:var(--bg-color)] border-[1px] border-[color:var(--border-color)] backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.25)]'
            >
                <div ref={cardShadowElement} className='absolute w-full h-full rounded-xl bg-transparent group-hover:animate-card-hover-shadow transition' />
                <div className='w-40 h-40 mx-auto rounded-[50%] bg-gradient-to-b to-transparent from-[rgba(255,255,255,0.1)] scale-95'>
                    <img
                        src={pokemonData.sprites.other.dream_world.front_default as string}
                        alt={pokemonData.name}
                        loading='lazy'
                        className='w-full h-full scale-105'
                    />
                </div>
                <div className='self-center flex flex-col'>
                    <h1 className='capitalize text-center text-xl font-medium mb-4 mt-2'>{pokemonData.name}</h1>
                    <section className='flex justify-evenly text-center'>
                        <span>
                            <h3 className='font-light text-primary-color-transp text-xs'>Weight</h3>
                            <p className='font-medium py-1'>{pokemonData.weight}</p>
                        </span>
                        <span>
                            <h3 className='font-light text-primary-color-transp text-xs'>Height</h3>
                            <p className='font-medium py-1'>{pokemonData.height}</p>
                        </span>
                    </section>
                    <p className='text-center font-light text-primary-color-transp text-xs'>
                        Type: <br />
                        <span className='font-medium text-primary-color text-base leading-loose'>
                            {
                                pokemonData.types.length > 1 ?
                                    pokemonData.types.map(
                                        (pokemonType, index) => ((index === 0 ? '' : ' | ') + capitalizeFirstLetter(pokemonType.type.name))
                                    )
                                    : capitalizeFirstLetter(pokemonData.types[0].type.name)
                            }
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card