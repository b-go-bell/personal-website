import './../../resources/styles/components/leisure/LeisureContent.scss'
import bar1 from './../../resources/media/leisure/travel/barcelona/1.JPG'
import bar2 from './../../resources/media/leisure/travel/barcelona/2.JPG'
import bar4 from './../../resources/media/leisure/travel/barcelona/4.jpg'
import bar3 from './../../resources/media/leisure/travel/barcelona/3.JPG'
import bar5 from './../../resources/media/leisure/travel/barcelona/5.JPG'
import bar6 from './../../resources/media/leisure/travel/barcelona/6.jpg'
import bigsur1 from './../../resources/media/leisure/travel/bigsur/1.jpg'
import bigsur2 from './../../resources/media/leisure/travel/bigsur/2.JPG'
import bigsur3 from './../../resources/media/leisure/travel/bigsur/3.JPG'
import bigsur4 from './../../resources/media/leisure/travel/bigsur/4.JPG'
import bigsur5 from './../../resources/media/leisure/travel/bigsur/5.JPG'
import bigsur6 from './../../resources/media/leisure/travel/bigsur/6.JPG'
import boco1 from './../../resources/media/leisure/travel/boco/1.JPG'
import boco2 from './../../resources/media/leisure/travel/boco/2.JPG'
import boco3 from './../../resources/media/leisure/travel/boco/3.JPG'
import boco4 from './../../resources/media/leisure/travel/boco/4.JPG'
import boco5 from './../../resources/media/leisure/travel/boco/5.jpg'
import boco6 from './../../resources/media/leisure/travel/boco/6.jpg'
import socal1 from './../../resources/media/leisure/travel/socal/1.JPG'
import socal2 from './../../resources/media/leisure/travel/socal/2.jpg'
import socal3 from './../../resources/media/leisure/travel/socal/3.jpg'
import socal4 from './../../resources/media/leisure/travel/socal/4.jpg'
import socal5 from './../../resources/media/leisure/travel/socal/5.jpg'
import socal6 from './../../resources/media/leisure/travel/socal/6.jpg'
import sf1 from './../../resources/media/leisure/travel/sanfran/1.jpg'
import sf2 from './../../resources/media/leisure/travel/sanfran/2.jpg'
import sf3 from './../../resources/media/leisure/travel/sanfran/3.jpg'
import sf4 from './../../resources/media/leisure/travel/sanfran/4.JPG'
import sf5 from './../../resources/media/leisure/travel/sanfran/5.jpg'
import sf6 from './../../resources/media/leisure/travel/sanfran/6.jpg'
import eir1 from './../../resources/media/leisure/travel/ireland/1.jpg'
import eir2 from './../../resources/media/leisure/travel/ireland/2.jpg'
import eir3 from './../../resources/media/leisure/travel/ireland/3.JPG'
import eir4 from './../../resources/media/leisure/travel/ireland/4.jpg'
import eir5 from './../../resources/media/leisure/travel/ireland/5.jpg'
import eir6 from './../../resources/media/leisure/travel/ireland/6.jpg'
import gen1 from './../../resources/media/leisure/travel/geneva/1.jpg'
import gen2 from './../../resources/media/leisure/travel/geneva/2.jpg'
import gen3 from './../../resources/media/leisure/travel/geneva/3.jpg'
import gen4 from './../../resources/media/leisure/travel/geneva/4.jpg'
import gen5 from './../../resources/media/leisure/travel/geneva/5.jpg'
import gen6 from './../../resources/media/leisure/travel/geneva/6.JPG'
import mad1 from './../../resources/media/leisure/travel/madrid/1.jpg'
import mad2 from './../../resources/media/leisure/travel/madrid/2.jpg'
import mad3 from './../../resources/media/leisure/travel/madrid/3.jpg'
import mad4 from './../../resources/media/leisure/travel/madrid/4.JPG'
import mad5 from './../../resources/media/leisure/travel/madrid/5.jpg'
import mad6 from './../../resources/media/leisure/travel/madrid/6.jpg'



function Travel() {
    return(
        <div className="leisure-content-container">
            <div className="leisure-top-space"/>
            <div className="content-container-header">
                <span className="italic">preface—</span>
            </div>
            <div className="viola-leisure-content">
                I want to give a preface by saying that I don't think that "travel" is really
                the right name for this section. I was close to going with "exploring" (alas,
                too corny) or "photography" (alas, I don't consider myself a photographer), so
                here we are with "travel."
                <br/>
                <br/>
                When I say travel, I don't so much mean going to cool new places <span className="italic">(although that's
                certainly a part of it)</span> I mean something more along the lines of learning new things.
                You can travel to a different time by picking up a book, and travel to a new place with the magic
                of Google Earth.
                <br/>
                <br />
                So I thought I'd share this love of travel-exploring-photography-learning-new-things with you here.
                I have intentionally organized the sections down below by location, but in my mind the concept of
                "place" is a very fluid one.
            </div>
            <br/>
            <div className="content-container-header">
                barcelona—
            </div>
            <div className="gallery">
                <img className="gallery-image" src={bar2} alt="me on a rooftop overlooking the view"/>
                <img className="gallery-image" src={bar1} alt="a massive paella being cooked in the street"/>
                <img className="gallery-image" src={bar3} alt="me smiling in a street"/>
                <img className="gallery-image" src={bar4} alt="a tasty paella I ate for dinner"/>
                <img className="gallery-image" src={bar5} alt="me smiling at park guell"/>
                <img className="gallery-image" src={bar6} alt="a pretty building at park guell"/>
            </div>
            <br/>
            <div className="content-container-header">
                big sur—
            </div>
            <div className="gallery">
                <img className="gallery-image" src={bigsur2} alt="big sur grocery store"/>
                <img className="gallery-image" src={bigsur1} alt="big sur coast line"/>
                <img className="gallery-image" src={bigsur3} alt="big sur bridge"/>
                <img className="gallery-image" src={bigsur4} alt="big sur coastline"/>
                <img className="gallery-image" src={bigsur5} alt="big sur ocean"/>
                <img className="gallery-image" src={bigsur6} alt="big sur vegetation"/>
            </div>
            <br/>
            <div className="content-container-header">
                boulder county—
            </div>
            <div className="gallery">
                <img className="gallery-image" src={boco1} alt="boulder flatirons"/>
                <img className="gallery-image" src={boco2} alt="boulder sunset"/>
                <img className="gallery-image" src={boco3} alt="boulder hike"/>
                <img className="gallery-image" src={boco5} alt="boulder garden"/>
                <img className="gallery-image" src={boco6} alt="boulder cat"/>
                <img className="gallery-image" src={boco4} alt="boulder horses"/>
            </div>
            <br/>
            <div className="content-container-header">
                ireland—
            </div>
            <div className="viola-leisure-content">
                <img className="gallery-image" src={eir1} alt="aran islands"/>
                <img className="gallery-image" src={eir3} alt="galway street art"/>
                <img className="gallery-image" src={eir2} alt="connemara national park"/>
                <img className="gallery-image" src={eir5} alt="pergola in cork"/>
                <img className="gallery-image" src={eir4} alt=" cliffs of mohr"/>
                <img className="gallery-image" src={eir6} alt="blarney castle"/>
            </div>
            <br/>
            <div className="content-container-header">
                geneva—
            </div>
            <div className="viola-leisure-content">
                <img className="gallery-image" src={gen2} alt="a view of the fountain"/>
                <img className="gallery-image" src={gen4} alt="breakfast with my friends"/>
                <img className="gallery-image" src={gen5} alt="me petting a cat on the street"/>
                <img className="gallery-image" src={gen3} alt="a beautiful fountain in old town geneva"/>
                <img className="gallery-image" src={gen1} alt="a sculpture in a garden beneath a tree"/>
                <img className="gallery-image" src={gen6} alt="me drinking from an old tiled fountain"/>
            </div>
            <br/>
            <div className="content-container-header">
                madrid—
            </div>
            <div className="viola-leisure-content">
                <img className="gallery-image" src={mad2} alt="me standing in a plaza"/>
                <img className="gallery-image" src={mad1} alt="a freshly baked palmier"/>
                <img className="gallery-image" src={mad4} alt="a beautiful apartment building with nice lighting"/>
                <img className="gallery-image" src={mad3} alt="a cool tile sign for a street"/>
                <img className="gallery-image" src={mad6} alt="a garden outside of a museum"/>
                <img className="gallery-image" src={mad5} alt="me smiling outside of a churro restaurant"/>
            </div>
            <br/>
            <div className="content-container-header">
                san francisco—
            </div>
            <div className="gallery">
                <img className="gallery-image" src={sf4} alt="san francsico street"/>
                <img className="gallery-image" src={sf2} alt="san francsico at night"/>
                <img className="gallery-image" src={sf1} alt="san francsico hotel"/>
                <img className="gallery-image" src={sf5} alt="san francsico bay bridge"/>
                <img className="gallery-image" src={sf6} alt="san francsico coit tower"/>
                <img className="gallery-image" src={sf3} alt="san francsico mirror pic"/>
            </div>
            <br/>
            <div className="content-container-header">
                so cal—
            </div>
            <div className="gallery">
                <img className="gallery-image" src={socal4} alt="southern california sunset"/>
                <img className="gallery-image" src={socal3} alt="southern california gas station"/>
                <img className="gallery-image" src={socal6} alt="southern california usc campus"/>
                <img className="gallery-image" src={socal1} alt="southern california beach picnic"/>
                <img className="gallery-image" src={socal2} alt="southern california usc campus- doheny library"/>
                <img className="gallery-image" src={socal5} alt="southern california beach sunset"/>
            </div>
            <br/>
        </div>
    );
}

export default Travel;