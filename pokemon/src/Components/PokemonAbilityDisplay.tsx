import React, { useEffect, useState } from 'react'
import { AbilityDescription } from '../ts/Interfaces'
import { getJSONData } from '../ts/PokemonAPI';

const PokemonAbilityDisplay = (props: { abilityLink: string }) => {
    const [abilityData, setAbilityData] = useState<AbilityDescription | null>(null);
    useEffect(() => {
        getJSONData<AbilityDescription>(props.abilityLink, setAbilityData);
    }, [props]);

    return (
        <div className='grid grid-cols-3 gap-8 cursor-pointer transition hover:scale-105'>
            <h1 className='uppercase text-lg font-semibold col-span-full lg:col-span-1 col-start-1 flex justify-center items-center'>{abilityData?.name}</h1>
            <p className='lg:col-start-2 col-span-full flex flex-col gap-2'>
                <span className='text-base font-normal'>{
                    abilityData?.effect_entries.filter((entry) => (entry.language.name === 'en'))[0].short_effect
                }</span>
                <span className='text-xs opacity-50 font-light'>{
                    abilityData?.effect_entries.filter((entry) => (entry.language.name === 'en'))[0].effect
                }</span>
            </p>
        </div>
    )
}

export default PokemonAbilityDisplay