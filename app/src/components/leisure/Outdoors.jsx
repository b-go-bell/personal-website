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
import running from './../../resources/media/leisure/outdoors/running.jpg';
import tennis from './../../resources/media/leisure/outdoors/wall.jpg';

function Outdoors() {

    const [ hikeinfo, setHikeinfo ] = useState(0);

    useEffect( () => {
    }, [hikeinfo]);

    function getHikeContent() {
        console.log(hikeinfo);
        if(hikeinfo === 0) {
            return(
                <div className="content-columns">
                    <div className="leisure-content">
                        Blue Lake via Oh Be Joyful
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        Crested Butte, CO
                    </div>
                    <div className="leisure-content-h3">
                        July 9 2022
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        13.7 miles — 2,228 elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 1) {
            return(
                <div className="content-columns">
                    <div className="leisure-content">
                        Navajo Loop
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        Bryce Canyon National Park, UT
                    </div>
                    <div className="leisure-content-h3">
                        May 25 2022
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        3.3 miles — 902 elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 2) {
            return(
                <div className="content-columns">
                    <div className="leisure-content">
                        Copper Lake
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        Crested Butte, CO
                    </div>
                    <div className="leisure-content-h3">
                        July 16 2022
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        10.9 miles — 2,195 elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 3) {
            return(
                <div className="content-columns">
                    <div className="leisure-content">
                        Canyon Rim Trail
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        Colorado National Monument, CO
                    </div>
                    <div className="leisure-content-h3">
                        May 27 2022
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        1.7 miles — 157 elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 4 || hikeinfo === 5 ){
            return(
                <div className="content-columns">
                    <div className="leisure-content">
                        West Maroon Pass
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        Crested Butte, CO
                    </div>
                    <div className="leisure-content-h3">
                        July 2 2022
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        12.6 miles — 3,028 elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 6) {
            return(
                <div className="content-columns">
                    <div className="leisure-content">
                        Cassidy Arch
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        Capitol Reef National Park, UT
                    </div>
                    <div className="leisure-content-h3">
                        May 26 2022
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        3.4 miles — 643 elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 7) {
            return(
                <div className="content-columns">
                    <div className="leisure-content">
                        Painter Boy Loop
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        Crested Butte, CO
                    </div>
                    <div className="leisure-content-h3">
                        August 2 2022
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        3.0 miles — 302 elevation gain
                    </div>
                </div>
            )
        }
        else if(hikeinfo === 8) {
            return(
                <div className="content-columns">
                    <div className="leisure-content">
                        The Narrows
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        Zion National Park, UT
                    </div>
                    <div className="leisure-content-h3">
                        May 26 2022
                    </div>
                    <br/>
                    <div className="leisure-content-h3">
                        4.1 miles — 217 elevation gain
                    </div>
                </div>
            )
        }
    }

    return(
        <div className="leisure-content-container">
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
                                    showThumbs={false}>
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
            <div className="content-container-header">
                running—
            </div>
            <div className="music-content-container">
                <div className="leisure-content">
                    Cross country is one of those things I picked up late in high school as
                    a sort of "why not?" that I've actually generally stuck with
                    since I started. It's not always easy, but the post-run feel is always worth
                    it.
                    <br/>
                    <br/>
                    I don't run as much in Los Angeles as I really should especially given the good
                    weather, but I'm much more partial to trail running—any dirt road will do. I
                    ran my first half-marathon at the Boulder Reservoir last summer with a sub- 2 hour
                    pace, and hope to run a full marathon soon!
                    <br/>
                    <br/>
                </div>
                <div>
                    <img  className="running-image" src={running}/>
                </div>
            </div>
            <div className="content-container-header">
                tennis—
            </div>
            <div className="music-content-container">
                <div>
                    <img className="running-image" src={tennis}/>
                </div>
                <div className="tennis-leisure-content">
                    A fun fact about me is that my first job was working as a tennis instructor at a
                    local club for over three years. While I started with coaching the beginner youth
                    and middle school groups, overtime I was promoted to working with the advanced
                    high school tournament groups, and was the first female junior coach to hold
                    private lessons.
                    <br/>
                    <br/>
                    In my opinion, I was a much better coach than competitive player. While I
                    got lucky my first season winning the Colorado State 2 singles championship (
                    <a  className="linked-content" target="_blank" href="https://www.bocopreps.com/2017/06/05/girls-tennis-dawsons-bell-earns-bocopreps-player-of-the-year-honors/">
                        read about that here</a>),
                    I didn't have the best follow-up seasons, and my plans
                    for redemption (<a  className="linked-content"   target="_blank" href="https://www.bocopreps.com/2020/03/10/girls-tennis-bell-barbour-hope-to-make-season-special-for-dawson-school/">
                    read about that here</a>) were squashed by the pandemic.
                    <br/>
                    <br/>
                    While I don't coach or play competitively anymore, I still love hitting around with
                    my family, which is what got me into the sport in the first place.
                </div>
            </div>
        </div>
    );
}

export default Outdoors;