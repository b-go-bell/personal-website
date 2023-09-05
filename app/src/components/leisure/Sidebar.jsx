import { useState, useEffect } from 'react';
import './../../resources/styles/components/leisure/Sidebar.scss'

function Sidebar({handleClick}) {

    const [ clicked, setClicked ] = useState(1);

    useEffect( () => {
    }, [clicked]);

    function buttonClick(num) {
        handleClick(num);
        setClicked(num);
    };

    function styleButton(num) {
        return ( (num === clicked)? "featured-leisure-button" : "leisure-button");
    };

    // function hideSidebar() {

    // }

    return (
        <div className="sidebar-container">
            <div className="leisure-subject">
                <button className={styleButton(1)}  onClick={() => buttonClick(1)}>
                    music
                </button>
            </div>
            <div className="leisure-subject">
                <button className={styleButton(2)}  onClick={() => buttonClick(2)}>
                    outdoors
                </button>
            </div>
            <div className="leisure-subject">
                <button className={styleButton(3)}  onClick={() => buttonClick(3)}>
                    travel
                </button>
            </div>
            {/* <div className="leisure-subject">
                <button className={"leisure-button"}  onClick={() => hideSidebar()}>
                    X
                </button>
            </div> */}
        </div>
    );
}

export default Sidebar;