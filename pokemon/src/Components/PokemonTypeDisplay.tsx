import React, { useEffect, useRef } from 'react'
import { addAlphaToColor, getPokemonTypeColor } from '../ts/Utilities';
import { PokemonType } from '../ts/Interfaces';

const PokemonTypeDisplay = (props: { typeData: PokemonType }) => {
    const pRef = useRef<HTMLParagraphElement>(null);
    const bgTransparancy: number = 0.5;

    useEffect(() => {
        const bgColor = getPokemonTypeColor(props.typeData.type.name);
        const bgColorTransp = addAlphaToColor(bgColor, bgTransparancy);
        pRef.current?.style.setProperty('--bg-color', bgColorTransp);
    }, [props]);

    return (
        <p ref={pRef} className='py-1 px-3 rounded text-xs font-light uppercase bg-[color:var(--bg-color)]'>{
            props.typeData.type.name
        }</p>
    )
}

export default PokemonTypeDisplay