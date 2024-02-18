import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { MainRequestData } from '../ts/Interfaces';
import Card from './Card';

const Home = (props: { mainRequestData: MainRequestData | null, containerDiv: HTMLDivElement, initialBGColor: string, glassBGColor: string }) => {

    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/' && props.containerDiv) {
            props.containerDiv.style.setProperty('--container-bg-gradient-color', props.initialBGColor);
        }
    }, [pathname, props.containerDiv, props.initialBGColor]);

    return (
        <div className='flex flex-wrap justify-between align-middle gap-y-10 gap-x-5 max-w-full min-h-full mt-14 mx-20 lg:mx-52 '>
            {
                props.mainRequestData?.results.map((cardData, index) => (
                    <Card key={index} cardData={cardData} glassBGColor={props.glassBGColor} />
                ))
            }
        </div>
    )
}

export default Home