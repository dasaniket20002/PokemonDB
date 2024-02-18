import React from 'react'
import { PokemonStat } from '../ts/Interfaces'

const PokemonStatsDisplay = (props: { statData: PokemonStat }) => {
    return (
        <div className='flex items-center justify-between gap-4 cursor-pointer transition hover:scale-105'>
            <p className='text-sm uppercase'>{
                props.statData.stat.name
                    .replace('special', 'Sp.')
                    .replace('attack', 'Atk')
                    .replace('defense', 'Def')
                    .replace('-', '')}&nbsp;:
            </p>
            <span className='flex items-center gap-2'>
                <h2 className='text-3xl font-medium'>{props.statData.base_stat}</h2>
                <p className='text-xs text-center font-extralight p-1 w-14 bg-[color:var(--border-color)] rounded'>Effort:&nbsp;{props.statData.effort}</p>
            </span>
        </div>
    )
}

export default PokemonStatsDisplay