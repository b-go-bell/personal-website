import {useEffect, useState} from 'react';
import Nav from './../components/Nav.jsx';
import Footer from './../components/Footer.jsx';
import Sidebar from './../components/leisure/Sidebar.jsx';
import LeisureContent from './../components/leisure/LeisureContent.jsx';
import './../resources/styles/pages/Leisure.scss';

function Leisure() {

    const [ clicked, setClicked ] = useState(1);

    useEffect( () => {
        console.log(clicked);
    }, [clicked]);

    return(
        <div className="leisure-container">
            <Nav/>
            <div className="leisure-content">
                <Sidebar handleClick={item => setClicked(item)}/>
                <LeisureContent content={clicked}/>
            </div>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
}

export default Leisure;