import './../../resources/styles/components/leisure/LeisureContent.scss';
import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import blue from './../../resources/media/leisure/outdoors/blue.jpg';
import bryce from './../../resources/media/leisure/outdoors/bryce1.JPG';
import copper from './../../resources/media/leisure/outdoors/copper.jpg';
import maroon1 from './../../resources/media/leisure/outdoors/maroon1.jpg';
import maroon2 from './../../resources/media/leisure/outdoors/maroon2.jpg';
import monument from './../../resources/media/leisure/outdoors/monument1.JPG';
import reef from './../../resources/media/leisure/outdoors/reef4.JPG';
import resort from './../../resources/media/leisure/outdoors/resort.jpg';
import zion from './../../resources/media/leisure/outdoors/zion5.JPG';


function Outdoors() {

    const [ hikeinfo, setHikeinfo ] = useState(0);

    useEffect( () => {
    }, [hikeinfo]);

    function getHikeContent() {
        console.log(hikeinfo);
        if(hikeinfo === 0) {
            return(
                <div className="content-columns">
                    <div className="outdoors-title">
                        Blue Lake via Oh Be Joyful
                    </div>
                    <div className="outdoors-subtitle">
                        Crested Butte, CO
                        <br/>
                        July 9 2022
                    </div>
                    <div className="leisure-content-h3">
                        13.7 miles — 2,228 feet elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 1) {
            return(
                <div className="content-columns">
                    <div className="outdoors-title">
                        Navajo Loop
                    </div>
                    <div className="outdoors-subtitle">
                        Bryce Canyon National Park, UT
                        <br/>
                        May 25 2022
                    </div>
                    <div className="leisure-content-h3">
                        3.3 miles — 902 feet elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 2) {
            return(
                <div className="content-columns">
                    <div className="outdoors-title">
                        Copper Lake
                    </div>
                    <div className="outdoors-subtitle">
                        Crested Butte, CO
                        <br/>
                        July 16 2022
                    </div>
                    <div className="leisure-content-h3">
                        10.9 miles — 2,195 feet elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 3) {
            return(
                <div className="content-columns">
                    <div className="outdoors-title">
                        Canyon Rim Trail
                    </div>
                    <div className="outdoors-subtitle">
                        Colorado National Monument, CO
                        <br/>
                        May 27 2022
                    </div>
                    <div className="leisure-content-h3">
                        1.7 miles — 157 feet elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 4 || hikeinfo === 5 ){
            return(
                <div className="content-columns">
                    <div className="outdoors-title">
                        West Maroon Pass
                    </div>

                    <div className="outdoors-subtitle">
                        Crested Butte, CO
                        <br/>
                        July 2 2022
                    </div>

                    <div className="leisure-content-h3">
                        12.6 miles — 3,028 feet elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 6) {
            return(
                <div className="content-columns">
                    <div className="outdoors-title">
                        Cassidy Arch
                    </div>

                    <div className="outdoors-subtitle">
                        Capitol Reef National Park, UT
                        <br/>
                        May 26 2022
                    </div>

                    <div className="leisure-content-h3">
                        3.4 miles — 643 feet elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 7) {
            return(
                <div className="content-columns">
                    <div className="outdoors-title">
                        Painter Boy Loop
                    </div>
                    <div className="outdoors-subtitle">
                        Crested Butte, CO
                        <br/>
                        August 2 2022
                    </div>
                    <div className="leisure-content-h3">
                        3.0 miles — 302 feet elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 8) {
            return(
                <div className="content-columns">
                    <div className="outdoors-title">
                        The Narrows
                    </div>
                    <div className="outdoors-subtitle">
                        Zion National Park, UT
                        <br/>
                        May 26 2022
                    </div>
                    <div className="leisure-content-h3">
                        4.1 miles — 217 feet elevation gain
                    </div>
                </div>
            )
        }
    }

    return(
        <div className="leisure-content-container">
            <div className="leisure-top-space"/>
            <div className="content-container-header">
                hiking—
            </div>
            <div className="leisure-content-container">
                <div className="leisure-content">
                    It's scandalous if you're from Colorado (especially Boulder) and don't hike or ski.
                    It makes sense, then, that I've grown up doing both. I thought I would
                    especially highlight my love for hiking here; don't get me wrong, I love skiing, but
                    I specifically appreciate hiking's accessibility—something that skiing can't quite claim.
                    There's a trail for everyone. Hiking suits all skill levels and abilities, all locations
                    (within a certain radius), and all ecosystems.
                    <br/>
                    <br/>
                    This past summer I roadtripped through Utah visiting the state's national parks, and lived in
                    Crested Butte, Colorado (ironically, a ski town) and thought I'd share some of my favorite
                    trails that I got to hike.
                </div>
                <br/>
                <div className="content-container-sl">
                    <div className="carousel-container">
                        <Carousel autoPlay={true}
                                    infiniteLoop={true}
                                    onChange={(index) => {setHikeinfo(index)}}
                                    showStatus={false}
                                    dynamicHeight={true}
                                    showThumbs={false}
                                    className="outdoors-carousel">
                            <div className="carousel-content">
                                <img src={blue} />
                            </div>
                            <div className="carousel-content">
                                <img src={bryce} />
                            </div>
                            <div className="carousel-content">
                                <img src={copper} />
                            </div>
                            <div className="carousel-content">
                                <img src={monument} />
                            </div>
                            <div className="carousel-content">
                                <img src={maroon1} />
                            </div>
                            <div className="carousel-content">
                                <img src={maroon2} />
                            </div>
                            <div className="carousel-content">
                                <img src={reef} />
                            </div>
                            <div className="carousel-content">
                                <img src={resort} />
                            </div>
                            <div className="carousel-content">
                                <img src={zion} />
                            </div>
                        </Carousel>
                    </div>
                    {getHikeContent()}
                </div>
            </div>
        </div>
    );
}

export default Outdoors;