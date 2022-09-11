import './../../resources/styles/components/home/Crossword.scss'
import { useState, useEffect } from 'react';
function Crossword() {
    const [ bInput, setBInput ] = useState('');
    const [ firstRInput, setFirstRInput ] = useState('');
    const [ iInput, setIInput ] = useState('');
    const [ dInput, setDInput ] = useState('');
    const [ firstGInput, setFirstGInput ] = useState('');
    const [ firstEInput, setFirstEInput ] = useState('');
    const [ tInput, setTInput ] = useState('');
    const [ lastEInput, setLastEInput ] = useState('');
    const [ l1Input, setL1Input ] = useState('');
    const [ l2Input, setL2Input ] = useState('');
    const [ middleGInput, setMiddleGInput ] = useState('');
    const [ o1Input, setO1Input ] = useState('');
    const [ middleRInput, setMiddleRInput ] = useState('');
    const [ o2Input, setO2Input ] = useState('');
    const [ nInput, setNInput ] = useState('');

    const [ focusWord, setFocusWord ] = useState(null);

    function pickWord(focus, switchFocus1, switchFocus2){
        if(focusWord === null || focusWord === switchFocus1 || focusWord === switchFocus2){
            setFocusWord(focus);
        }
    }

    if(localStorage.getItem("--color") != null)
        document.documentElement.style.setProperty("--color", localStorage.getItem("--color"));
    if(localStorage.getItem("--color-primary") != null)
        document.documentElement.style.setProperty("--color-primary", localStorage.getItem("--color-primary"));
    if(localStorage.getItem("--color-secondary") != null)
        document.documentElement.style.setProperty("--color-secondary", localStorage.getItem("--color-secondary"));
    if(localStorage.getItem("--color-highlight") != null)
        document.documentElement.style.setProperty("--color-highlight", localStorage.getItem("--color-highlight"));

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



    function change(character, inp, setInp, forwardLocArr) {
        // setting up the value of the squares

        let oldValue = inp;
        let newValue = character;
        setInp(newValue);

        //letter entered, move forward
        if((oldValue === undefined || oldValue === '' || oldValue === null || newValue.length > oldValue.length)){
            document.getElementById(forwardLocArr[focusWord]).focus();
        }
    }

    // //used for if item was deleted
    function keyDown(k, inp, backLocArr, forwardMaterials) {
        if((k.which === 8 || k.which === 46) && (inp === undefined || inp === '')){
            document.getElementById(backLocArr[focusWord]).focus();
            k.preventDefault();
        }
        else if(inp.length === 1 && k.which !== 8 && k.which !== 46){
            //expect typed character to go to the next box
            //need to change that documents value to the character
            //change the const
            //move forward to the next next character

            let nextIDArr = forwardMaterials[0];
            let setNextInpArr =  forwardMaterials[1];
            let nextNextIDArr = forwardMaterials[2];

            // 1. move forward
            document.getElementById(nextIDArr[focusWord]).focus();

            change(k.key, inp, setNextInpArr[focusWord], nextNextIDArr[focusWord]);
        }


    }

    function firstHint(){
        if((bInput === 'b' || bInput === 'B') &&
            (firstRInput === 'r' || firstRInput === 'R') &&
            (iInput === 'i' || iInput === 'I') &&
            (dInput === 'd' || dInput === 'D') &&
            (firstGInput === 'g' || firstGInput === 'G') &&
            (firstEInput === 'e' || firstEInput === 'E') &&
            (tInput === 't' || tInput === 'T')){
                return true;
            }
        return false;
    }

    function middleHint(){
        if((middleGInput === 'g' || middleGInput === 'G') &&
            (o1Input === 'o' || o1Input === 'O') &&
            (middleRInput === 'r' || middleRInput === 'R') &&
            (dInput === 'd' || dInput === 'D') &&
            (o2Input === 'o' || o2Input === 'O') &&
            (nInput === 'n' || nInput === 'N')){
                return true;
        }
        return false;
    }

    function lastHint(){
        if((bInput === 'b' || bInput === 'B') &&
            (lastEInput === 'e' || lastEInput === 'E') &&
            (l1Input === 'l' || l1Input === 'L') &&
            (l2Input === 'l' || l2Input === 'L')){
                return true;
            }
        return false;
    }

    function colorFirst() {
        if(firstHint()){
            document.getElementById("hint1").style.color = "var(--color)";

            document.getElementById("b").style.color = "var(--color)";
            document.getElementById("firstR").style.color = "var(--color)";
            document.getElementById("i").style.color = "var(--color)";
            document.getElementById("d").style.color = "var(--color)";
            document.getElementById("firstG").style.color = "var(--color)";
            document.getElementById("firstE").style.color = "var(--color)";
            document.getElementById("t").style.color = "var(--color)";
          }
        else{
            document.getElementById("hint1").style.color = "#000000";
            document.getElementById("b").style.color = "#000000";
            document.getElementById("firstR").style.color = "#000000";
            document.getElementById("i").style.color = "#000000";
            document.getElementById("d").style.color = "#000000";
            document.getElementById("firstG").style.color = "#000000";
            document.getElementById("firstE").style.color = "#000000";
            document.getElementById("t").style.color = "#000000";
        }
    }

    function colorMiddle() {
        if(middleHint()){
            document.getElementById("hint2").style.color = "var(--color)";

            document.getElementById("middleG").style.color = "var(--color)";
            document.getElementById("O1").style.color = "var(--color)";
            document.getElementById("middleR").style.color = "var(--color)";
            document.getElementById("d").style.color = "var(--color)";
            document.getElementById("O2").style.color = "var(--color)";
            document.getElementById("n").style.color = "var(--color)";
        } else {
            document.getElementById("hint2").style.color = "#000000";

            document.getElementById("middleG").style.color = "#000000";
            document.getElementById("O1").style.color = "#000000";
            document.getElementById("middleR").style.color = "#000000";
            document.getElementById("d").style.color = "#000000";
            document.getElementById("O2").style.color = "#000000";
            document.getElementById("n").style.color = "#000000";
        }
    }

    function colorLast() {
        if(lastHint()){
            document.getElementById("hint3").style.color = "var(--color)";

            document.getElementById("b").style.color = "var(--color)";
            document.getElementById("lastE").style.color = "var(--color)";
            document.getElementById("L1").style.color = "var(--color)";
            document.getElementById("L2").style.color = "var(--color)";
        }
        else {
            document.getElementById("hint3").style.color = "#000000";

            document.getElementById("b").style.color = "#000000";
            document.getElementById("lastE").style.color = "#000000";
            document.getElementById("L1").style.color = "#000000";
            document.getElementById("L2").style.color = "#000000";
        }
    }


    useEffect( () => {

        //checking first name
        colorFirst();

        //checking middle name
        colorMiddle();

        //color last name
        colorLast();

        //check overlap squares: b and g
        if(firstHint() || lastHint()){
            document.getElementById("b").style.color = "var(--color)";
        }
        else {
            document.getElementById("b").style.color = "#000000";
        }

        if(firstHint() || middleHint()){
            document.getElementById("d").style.color = "var(--color)";
        }
        else {
            document.getElementById("d").style.color = "#000000";
        }


    }, [focusWord, bInput, firstRInput, iInput, dInput, firstGInput, firstEInput, tInput, lastEInput, l1Input, l2Input, middleGInput, o1Input, middleRInput, o2Input, nInput]);

    return(
        <div className="crossword-container">
            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>
            <input id="middleG" className="text-box" maxLength="1"
                    onClick={ () => pickWord(1, 0, 2)} value={middleGInput}
                    onKeyDown={k => keyDown(k, middleGInput, ["middleG", "middleG", "middleG"], [ ["O1", "O1", "O1"], [setO1Input, setO1Input, setO1Input], [ ["middleR", "middleR", "middleR"], ["middleR", "middleR", "middleR"], ["middleR", "middleR", "middleR"]]] )}
                    onChange={e => change(e.target.value, middleGInput, setMiddleGInput, ["O1", "O1", "O1"])}/>

            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>
            <input id="O1" className="text-box" maxLength="1"
                    onClick={ () => pickWord(1, 0, 2)} value={o1Input}
                    onKeyDown={k => keyDown(k, o1Input, ["middleG", "middleG", "middleG"], [ ["middleR", "middleR", "middleR"], [setMiddleRInput, setMiddleRInput, setMiddleRInput], [ ["d", "d", "d"], ["d", "d", "d"], ["d", "d", "d"] ] ] )}
                    onChange={e => change(e.target.value, o1Input, setO1Input, ["middleR", "middleR", "middleR"])}/>

            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>

            <input id="middleR" className="text-box" maxLength="1"
                    onClick={ () => pickWord(1, 0, 2)} value={middleRInput}
                    onKeyDown={k => keyDown(k, middleRInput, ["O1", "O1", "O1"], [ ["d", "d", "d"], [setDInput, setDInput, setDInput], [ ["firstG", "O2", "firstG"], ["firstG", "O2", "firstG"], ["firstG", "O2", "firstG"] ] ])}
                    onChange={e => change(e.target.value, middleRInput, setMiddleRInput, ["d", "d", "d"])}/>


            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>

            <input id="b" className="text-box" maxLength="1"
                    onClick={ () => pickWord(0, 1, 1)} value={bInput}
                    onKeyDown={k => keyDown(k, bInput, ["b", "b", "b"], [ ["firstR", "firstR", "lastE"], [setFirstRInput, setFirstRInput, setLastEInput], [ ["i", "i", "i"], ["i", "i", "i"], ["L1", "L1", "L1"] ] ])}
                    onChange={e => change(e.target.value, bInput, setBInput, ["firstR", "firstR", "lastE"], false)}/>

            <input id="firstR" className="text-box" maxLength="1"
                    onClick={ () => pickWord(0, 1, 2)} value={firstRInput}
                    onKeyDown={k => keyDown(k, firstRInput, ["b", "b", "b"], [ ["i", "i", "i"], [setIInput, setIInput, setIInput], [ ["d", "d", "d"], ["d", "d", "d"], ["d", "d", "d"] ] ])}
                    onChange={e => change(e.target.value, firstRInput, setFirstRInput, ["i", "i", "i"], false)}/>

            <input id="i" className="text-box" maxLength="1"
                    onClick={ () => pickWord(0, 1, 2)} value={iInput}
                    onKeyDown={k => keyDown(k, iInput, ["firstR", "firstR", "firstR"], [ ["d", "d", "d"], [setDInput, setDInput, setDInput], [ ["firstG", "O2", "firstG"], ["firstG", "O2", "firstG"], ["firstG", "O2", "firstG"] ] ] )}
                    onChange={e => change(e.target.value, iInput, setIInput, ["d", "d", "d"], false)}/>

            <input id="d" className="text-box" maxLength="1"
                    onClick={ () => pickWord(0, 2, 2)} value={dInput}
                    onKeyDown={k => keyDown(k, dInput, ["i", "middleR", "i"], [ ["firstG", "O2", "firstG"], [setFirstGInput, setO2Input, setFirstGInput], [ ["firstE", "firstE", "firstE"], ["n", "n", "n"], ["firstE", "firstE", "firstE"] ] ] )}
                    onChange={e => change(e.target.value, dInput, setDInput, ["firstG", "O2", "firstG"])}/>

            <input id="firstG" className="text-box" maxLength="1"
                    onClick={ () => pickWord(0, 1, 2)} value={firstGInput}
                    onKeyDown={k => keyDown(k, firstGInput, ["d", "d", "d"], [ ["firstE", "firstE", "firstE"], [setFirstEInput, setFirstEInput, setFirstEInput], [ ["t", "t", "t"], ["t", "t", "t"], ["t", "t", "t"] ] ])}
                    onChange={e => change(e.target.value, firstGInput, setFirstGInput, ["firstE", "firstE", "firstE"])}/>

            <input id="firstE" className="text-box" maxLength="1"
                    onClick={ () => pickWord(0, 1, 2)} value={firstEInput}
                    onKeyDown={k => keyDown(k, firstEInput, ["firstG", "firstG", "firstG"], [ ["t", "t", "t"], [setTInput, setTInput, setTInput], [["t", "t", "t"], ["t", "t", "t"],["t", "t", "t"]] ])}
                    onChange={e => change(e.target.value, firstEInput, setFirstEInput, ["t", "t", "t"])}/>

            <input id="t" className="text-box" maxLength="1"
                    onClick={ () => pickWord(0, 1, 2)} value={tInput}
                    onKeyDown={k => keyDown(k, tInput, ["firstE", "firstE", "firstE"], [ ["t", "t", "t"], [setTInput, setTInput, setTInput], [ ["t", "t", "t"], ["t", "t", "t"], ["t", "t", "t"] ] ] )}
                    onChange={e => change(e.target.value, tInput, setTInput, ["t", "t", "t"])}/>

            <input id="lastE" className="text-box" maxLength="1"
                    onClick={ () => pickWord(2, 0, 1)} value={lastEInput}
                    onKeyDown={k => keyDown(k, lastEInput, ["b", "b", "b"], [ ["L1", "L1", "L1"], [setL1Input, setL1Input, setL1Input], [ ["L2", "L2", "L2"], ["L2", "L2", "L2"], ["L2", "L2", "L2"] ] ] )}
                    onChange={e => change(e.target.value, lastEInput, setLastEInput, ["L1", "L1", "L1"])}/>

            <div className="empty-box"/>
            <div className="empty-box"/>

            <input id="O2" className="text-box" maxLength="1"
                    onClick={ () => pickWord(1, 0, 2)} value={o2Input}
                    onKeyDown={k => keyDown(k, o2Input, ["d", "d", "d"], [ ["n", "n", "n"], [setNInput, setNInput, setNInput], [["n", "n", "n"], ["n", "n", "n"], ["n", "n", "n"] ] ])}
                    onChange={e => change(e.target.value, o2Input, setO2Input, ["n", "n", "n"])}/>

            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>

            <input id="L1" className="text-box" maxLength="1"
                    onClick={ () => pickWord(2, 0, 1)} value={l1Input}
                    onKeyDown={k => keyDown(k, l1Input, ["lastE", "lastE", "lastE"], [ ["L2", "L2", "L2"], [setL2Input, setL2Input, setL2Input], [ ["L2", "L2", "L2"], ["L2", "L2", "L2"], ["L2", "L2", "L2"] ] ])}
                    onChange={e => change(e.target.value, l1Input, setL1Input, ["L2", "L2", "L2"])}/>

            <div className="empty-box"/>
            <div className="empty-box"/>

            <input id="n" className="text-box" maxLength="1"
                    onClick={ () => pickWord(1, 0, 2)} value={nInput}
                    onKeyDown={k => keyDown(k, nInput, ["O2", "O2", "O2"], [ ["n", "n", "n"], [setNInput, setNInput, setNInput], [["n", "n", "n"], ["n", "n", "n"], ["n", "n", "n"] ] ])}
                    onChange={e => change(e.target.value, nInput, setNInput, ["n", "n", "n"])}/>

            <div className="hint-box">
                <p className="hintLabel">
                    ACROSS
                </p>
                <p className="hint" id="hint1" onClick={() => {setFocusWord(0); document.getElementById("b").click(); document.getElementById("b").focus();}}>
                    <div className="text-color">
                        &emsp;1. Jones with a diary
                    </div>
                </p>
            </div>

            <input id="L2" className="text-box" maxLength="1"
                    onClick={ () => pickWord(2, 0, 1)} value={l2Input}
                    onKeyDown={k => keyDown(k, l2Input, ["L1", "L1", "L1"], [ ["L2", "L2", "L2"], [setL2Input, setL2Input, setL2Input], [ ["L2", "L2", "L2"], ["L2", "L2", "L2"], ["L2", "L2", "L2"] ] ])}
                    onChange={e => change(e.target.value, l2Input, setL2Input, ["L2", "L2", "L2"])}/>

            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="empty-box"/>
            <div className="hint-box">
                <p className="hintLabel">
                    DOWN
                </p>
                <p className="hint" id="hint3" onClick={() => {setFocusWord(2); document.getElementById("b").click(); document.getElementById("b").focus();}}>
                    <div className="text-color">
                        &emsp;1. Mexican fast food chain
                    </div>
                </p>
                <p className="hint"  id="hint2" onClick={() => {setFocusWord(1); document.getElementById("middleG").click(); document.getElementById("middleG").focus();}}>
                    <div className="text-color">
                        &emsp;2. 'idiot sandwich' chef
                    </div>
                </p>
            </div>


            {/*

            <div className="hint1" onClick={() => {document.getElementById("b").click(); document.getElementById("b").focus();}}>
                1
            </div>
            <div className="hint2" onClick={() => {document.getElementById("middleG").click(); document.getElementById("middleG").focus();}}>
                2
            </div>
             */}
        </div>
    );
}

export default Crossword;