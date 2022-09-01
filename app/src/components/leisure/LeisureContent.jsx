import './../../resources/styles/components/leisure/LeisureContent.scss';
import Music from './Music.jsx';
import Outdoors from './Outdoors.jsx';
import Travel from './Travel.jsx';

function LeisureContent(props) {

    if(localStorage.getItem("--color") != null)
        document.documentElement.style.setProperty("--color", localStorage.getItem("--color"));
    if(localStorage.getItem("--color-primary") != null)
        document.documentElement.style.setProperty("--color-primary", localStorage.getItem("--color-primary"));
    if(localStorage.getItem("--color-secondary") != null)
        document.documentElement.style.setProperty("--color-secondary", localStorage.getItem("--color-secondary"));
    if(localStorage.getItem("--color-highlight") != null)
        document.documentElement.style.setProperty("--color-highlight", localStorage.getItem("--color-highlight"));
    if(localStorage.getItem("--color-basic-primary") != null)
        document.documentElement.style.setProperty("--color-basic-primary", localStorage.getItem("--color-basic-primary"));
    if(localStorage.getItem("--color-basic-secondary") != null)
        document.documentElement.style.setProperty("--color-basic-secondary", localStorage.getItem("--color-basic-secondary"));


    if(localStorage.getItem("--font-size-h0") != null)
        document.documentElement.style.setProperty("--font-size-h0", localStorage.getItem("--font-size-h0"));
    if(localStorage.getItem("--font-size-h1") != null)
        document.documentElement.style.setProperty("--font-size-h1", localStorage.getItem("--font-size-h1"));
    if(localStorage.getItem("--font-size-h2") != null)
        document.documentElement.style.setProperty("--font-size-h2", localStorage.getItem("--font-size-h2"));
    if(localStorage.getItem("--font-size-h3") != null)
        document.documentElement.style.setProperty("--font-size-h3", localStorage.getItem("--font-size-h3"));
    if(localStorage.getItem("--font-size-h4") != null)
        document.documentElement.style.setProperty("--font-size-h4", localStorage.getItem("--font-size-h4"));
    if(localStorage.getItem("--font-size-body") != null)
        document.documentElement.style.setProperty("--font-size-body", localStorage.getItem("--font-size-body"));


    function displayContent() {

        if (props.content === 1){
            return(
                <Music/>
            );
        }
        else if (props.content === 2){
            return(
                <Outdoors/>
            );
        }
        else if (props.content === 3){
            return(
                <Travel/>
            );
        }
    };

    return(
        <div className="leisure-content-container">
            {displayContent()}
        </div>
    );
}

export default LeisureContent;