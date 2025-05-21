import React, { useState, type JSX } from 'react';
import { SiOpensea, SiCampaignmonitor } from 'react-icons/si';
import { GrOverview } from 'react-icons/gr';
import { MdOutlinePool, MdCabin, MdOutlineSurfing, MdOutlineTwoWheeler } from 'react-icons/md';
import { GiBigDiamondRing, GiFarmTractor, GiRiver, GiCampingTent, GiIsland, GiLuckyFisherman, GiMountainCave, GiGrapes, GiTreeBranch, GiWaterfall, GiCastle, GiWheat, GiYinYang } from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { IoColorFillSharp, IoFilterSharp } from "react-icons/io5";


enum ScrollDirection {
    LEFT = 'left',
    RIGHT = 'right'
}

type Icon = {
    name: string;
    icon: JSX.Element
}


export default function Categories() {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState<null | number>(null);


    const categoriesList: Icon[] = [
        { name: 'Bord de mer', icon: <SiOpensea /> },
        { name: 'Piscines', icon: <MdOutlinePool /> },
        { name: 'Avec vue', icon: <GrOverview /> },
        { name: 'Surf', icon: <MdOutlineSurfing /> },
        { name: 'Luxe', icon: <GiBigDiamondRing /> },
        { name: 'Campagne', icon: <SiCampaignmonitor /> },
        { name: 'À deux roues', icon: <MdOutlineTwoWheeler /> },
        { name: 'À la ferme', icon: <GiFarmTractor /> },
        { name: 'Au pied des pistes', icon: <FaSkiing /> },
        { name: 'Lacs', icon: <GiRiver /> },
        { name: 'Cabanes', icon: <MdCabin /> },
        { name: 'Cabanes perchées', icon: <GiLuckyFisherman /> },
        { name: 'Camping', icon: <GiCampingTent /> },
        { name: 'Ile', icon: <GiIsland /> },
        { name: 'Montagnes', icon: <GiMountainCave /> },
        { name: 'Vignobles', icon: <GiGrapes /> },
        { name: 'Forêts', icon: <GiTreeBranch /> },
        { name: 'Cascades', icon: <GiWaterfall /> },
        { name: 'Châteaux', icon: <GiCastle /> },
        { name: 'Plaines', icon: <GiWheat /> },
        { name: 'Retraite spirituelle', icon: <GiYinYang /> },
    ];

    const handleScroll = (direction: ScrollDirection) => {
        const scrollWidth = 250; //saut de scroll
        const containerWidth = 400; //taille du conteneur

        if (direction === ScrollDirection.LEFT) {
            setScrollPosition(Math.max(scrollPosition - scrollWidth, 0));
        } 
        else if (direction === ScrollDirection.RIGHT) {
            setScrollPosition(Math.min(scrollPosition + scrollWidth, categoriesList.length * scrollWidth - containerWidth));
        }
    }


    return (
        <div style={{
            position: 'relative',
            paddingTop: '1.5rem',
            paddingInline: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
        }}>
            {scrollPosition > 0 && (
                <button
                    onClick={() => handleScroll(ScrollDirection.LEFT)}
                    style={{
                        padding: '0.25rem',
                        backgroundColor: 'white',
                        border: '1px solid',
                        zIndex: '10',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '40px',
                        fontSize: '0.875',
                        lineHeight: '1.25rem'
                    }}
                >
                    <RiArrowLeftSLine />
                </button>
            )}

            <div style={{
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    display: 'flex',
                    transitionProperty: 'all',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDuration: '150ms',
                    transform: `translateX(-${ scrollPosition }px)`
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {categoriesList.map((category, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '8rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: '0',
                                }}
                            >

                                <div
                                    onMouseEnter={() => setIsHovered(index)}
                                    onMouseLeave={() => setIsHovered(null)}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        borderBottom: isHovered !== index ? '0.5rem #ffffff' : '2px solid black',
                                        paddingBottom: '0.5rem',

                                    }}>
                                    <span style={{
                                        fontSize: '1.25rem',
                                        lineHeight: '1.75rem'
                                    }}>
                                        {category.icon}
                                    </span>
                                    <div style={{
                                        fontSize: '1.25rem',
                                        lineHeight: '1.75rem',
                                        textAlign: 'center'
                                    }}>
                                        {category.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {
                scrollPosition < categoriesList.length * 200 - 400 && (
                    <button onClick={() => handleScroll(ScrollDirection.RIGHT)}
                        style={{
                            padding: '0.25rem',
                            backgroundColor: 'white',
                            borderRadius: '40px',
                            border: '1px solid black',
                            zIndex: '10',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                            lineHeight: '1.75rem'
                        }}>
                        <RiArrowRightSLine />
                    </button>
                )
            }
            <button style={{
                border: '1px solid #000',
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem',
                gap: '0.5rem',
                cursor: 'pointer',
                borderRadius: '9999px'
            }}>
                <span><IoFilterSharp /></span>
                <span>Filtres</span>
            </button>
        </div>
    )
}