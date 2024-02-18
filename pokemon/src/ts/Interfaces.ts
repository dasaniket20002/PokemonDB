export interface NameURLPair {
    name: string;
    url: string;
}

export interface MainRequestData {
    count: number;
    next: string | null;
    prev: string | null;
    results: NameURLPair[];
}

export interface PokemonAbility {
    ability: NameURLPair;
    is_hidden: boolean;
    slot: number;
}

export interface PokemonMoveVersionGroupDetail {
    level_learned_at: number;
    move_learn_method: NameURLPair;
    version_group: NameURLPair;
}
export interface PokemonMove {
    move: NameURLPair;
    version_group_details: PokemonMoveVersionGroupDetail[];
}

export interface PokemonSprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        'official-artwork': { front_default: string | null; front_shiny: string | null };
        dream_world: { front_default: string | null; front_female: string | null }
    }
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: NameURLPair;
}

export interface PokemonType {
    slot: number;
    type: NameURLPair;
}

export interface Pokemon {
    abilities: PokemonAbility[];
    base_experience: number;
    forms: NameURLPair[];
    height: number;
    id: number;
    moves: PokemonMove[];
    name: string;
    order: number;
    species: NameURLPair;
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
}

export interface AbilityEffectEntry {
    effect: string;
    language: NameURLPair;
    short_effect: string;
}

export interface FlavourTextEntry {
    flavor_text: string;
    language: NameURLPair;
    version_group: NameURLPair;
}

export interface AbilityDescription {
    effect_entries: AbilityEffectEntry[];
    flavor_text_entries: FlavourTextEntry[];
    name: string;
    id: number;
}

export enum PokemonTypeColors {
    normal = '#A8A77A',
    fire = '#EE8130',
    water = '#6390F0',
    electric = '#F7D02C',
    grass = '#7AC74C',
    ice = '#96D9D6',
    fighting = '#C22E28',
    poison = '#A33EA1',
    ground = '#E2BF65',
    flying = '#A98FF3',
    psychic = '#F95587',
    bug = '#A6B91A',
    rock = '#B6A136',
    ghost = '#735797',
    dragon = '#6F35FC',
    dark = '#705746',
    steel = '#B7B7CE',
    fairy = '#D685AD'
};