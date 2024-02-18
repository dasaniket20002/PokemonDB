import { PokemonType, PokemonTypeColors } from "./Interfaces";

export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function mixColorsWithoutAlpha(color1Str: string, color2Str: string): string {
    const color1: number = parseInt(color1Str.substring(1), 16);
    const color2: number = parseInt(color2Str.substring(1), 16);

    const color1Red = (color1 >> 16) & 0xFF
    const color1Green = (color1 >> 8) & 0xFF;
    const color1Blue = (color1) & 0xFF;

    const color2Red = (color2 >> 16) & 0xFF
    const color2Green = (color2 >> 8) & 0xFF;
    const color2Blue = (color2) & 0xFF;

    const colorRed = Math.round(lerp((color1Red / 255), (color2Red / 255), 0.5) * 255);
    const colorGreen = Math.round(lerp((color1Green / 255), (color2Green / 255), 0.5) * 255);
    const colorBlue = Math.round(lerp((color1Blue / 255), (color2Blue / 255), 0.5) * 255);

    const hex = rgbaToHex(colorRed, colorGreen, colorBlue);

    return hex;
}

export function mixColors(color1Str: string, color2Str: string): string {
    const color1: number = parseInt(color1Str.substring(1), 16);
    const color2: number = parseInt(color2Str.substring(1), 16);

    const color1Red = (color1 >> 24) & 0xFF
    const color1Green = (color1 >> 16) & 0xFF;
    const color1Blue = (color1 >> 8) & 0xFF;
    const color1Alpha = (color1 & 0xFF) / 255;

    const color2Red = (color2 >> 24) & 0xFF
    const color2Green = (color2 >> 16) & 0xFF;
    const color2Blue = (color2 >> 8) & 0xFF;
    const color2Alpha = (color2 & 0xFF) / 255;

    const colorRed = Math.round(lerp((color1Red / 255), (color2Red / 255), 0.5) * 255);
    const colorGreen = Math.round(lerp((color1Green / 255), (color2Green / 255), 0.5) * 255);
    const colorBlue = Math.round(lerp((color1Blue / 255), (color2Blue / 255), 0.5) * 255);
    const colorAlpha = Math.round(lerp((color1Alpha), (color2Alpha), 0.5));

    console.log(colorRed, colorGreen, colorBlue, colorAlpha);
    const hex = rgbaToHex(colorRed, colorGreen, colorBlue, colorAlpha);
    console.log(hex);

    return hex;
}

export function rgbaToHex(r: number, g: number, b: number, a?: number): string {
    const red: string = r.toString(16).padStart(2, '0');
    const green: string = g.toString(16).padStart(2, '0');
    const blue: string = b.toString(16).padStart(2, '0');
    const alpha: string = a ? Math.round(a * 255).toString(16).padStart(2, '0') : '';
    return `#${red}${green}${blue}${alpha}`;
}

export function lerp(a: number, b: number, alpha: number): number {
    return a + alpha * (b - a);
}

export function addAlphaToColor(color: string, alpha: number): string {
    return color + Math.round(alpha * 255).toString(16).padStart(2, '0');
}

export function getPokemonTypeColor(type: string): string {
    if (type === 'normal') return PokemonTypeColors.normal;
    if (type === 'fire') return PokemonTypeColors.fire;
    if (type === 'water') return PokemonTypeColors.water;
    if (type === 'electric') return PokemonTypeColors.electric;
    if (type === 'grass') return PokemonTypeColors.grass;
    if (type === 'ice') return PokemonTypeColors.ice;
    if (type === 'fighting') return PokemonTypeColors.fighting;
    if (type === 'poison') return PokemonTypeColors.poison;
    if (type === 'ground') return PokemonTypeColors.ground;
    if (type === 'flying') return PokemonTypeColors.flying;
    if (type === 'psychic') return PokemonTypeColors.psychic;
    if (type === 'bug') return PokemonTypeColors.bug;
    if (type === 'rock') return PokemonTypeColors.rock;
    if (type === 'ghost') return PokemonTypeColors.ghost;
    if (type === 'dragon') return PokemonTypeColors.dragon;
    if (type === 'dark') return PokemonTypeColors.dark;
    if (type === 'steel') return PokemonTypeColors.steel;
    if (type === 'fairy') return PokemonTypeColors.fairy;

    return PokemonTypeColors.normal;
}

export function getPokemonFinalColor(pokemonTypeArray: PokemonType[]): string {
    let mainColor = getPokemonTypeColor(pokemonTypeArray[0].type.name);
    for (let i = 1; i < pokemonTypeArray.length; i++) {
        mainColor = mixColorsWithoutAlpha(mainColor, getPokemonTypeColor(pokemonTypeArray[i].type.name));
    }
    return mainColor;
}