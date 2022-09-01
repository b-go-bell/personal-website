import './../../resources/styles/components/leisure/LeisureContent.scss'
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


function Travel() {
    return(
        <div className="leisure-content-container">
            <div className="viola-leisure-content">
                I want to give a preface by saying that I don't think that "travel" is really
                the right name for this section. I was close to going with "exploring" (alas,
                too corny) or "photography" (alas, I don't consider myself a photographer), so
                here we are with "travel."
                <br/>
                <br/>
                When I say travel, I don't so much mean going to cool new places—although that's
                certainly a part of it—I mean something more along the lines of learning new things
                (you can  see how "learning new things" isn't a great section header, either).
                You can travel to a different time by picking up a book, and travel to a new place with the magic
                of Google Earth <span className="italic">
                    (Google Earth creators if you're reading this- ily). </span>
                <br/>
                <br />
                So I thought I'd share this love of travel-exploring-photography-learning-new-things with you here!
                I have intentionally organized the sections down below by location, but in my mind the concept of
                "place" is a very fluid one.
            </div>
            <br/>
            <div className="content-container-header">
                big sur—
            </div>
            <div className="gallery">
                <img className="gallery-image" src={bigsur2}/>
                <img className="gallery-image" src={bigsur1}/>
                <img className="gallery-image" src={bigsur3}/>
                <img className="gallery-image" src={bigsur4}/>
                <img className="gallery-image" src={bigsur5}/>
                <img className="gallery-image" src={bigsur6}/>
            </div>
            <br/>
            <div className="content-container-header">
                boulder county—
            </div>
            <div className="gallery">
                <img className="gallery-image" src={boco1}/>
                <img className="gallery-image" src={boco2}/>
                <img className="gallery-image" src={boco3}/>
                <img className="gallery-image" src={boco5}/>
                <img className="gallery-image" src={boco6}/>
                <img className="gallery-image" src={boco4}/>
            </div>
            <br/>
            <div className="content-container-header">
                ireland—
            </div>
            <div className="viola-leisure-content">
                upcoming!
            </div>
            <br/>
            <div className="content-container-header">
                san francisco—
            </div>
            <div className="gallery">
                <img className="gallery-image" src={sf4}/>
                <img className="gallery-image" src={sf2}/>
                <img className="gallery-image" src={sf1}/>
                <img className="gallery-image" src={sf5}/>
                <img className="gallery-image" src={sf6}/>
                <img className="gallery-image" src={sf3}/>
            </div>
            <br/>
            <div className="content-container-header">
                so cal—
            </div>
            <div className="gallery">
                <img className="gallery-image" src={socal4}/>
                <img className="gallery-image" src={socal3}/>
                <img className="gallery-image" src={socal6}/>
                <img className="gallery-image" src={socal1}/>
                <img className="gallery-image" src={socal2}/>
                <img className="gallery-image" src={socal5}/>
            </div>
            <br/>
        </div>
    );
}

export default Travel;