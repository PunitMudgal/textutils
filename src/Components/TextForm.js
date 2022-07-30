import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("upperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("upperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = (text) => {
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
}

const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
}

    const [text, setText] = useState("Enter Text here");        // this we are using in textarea - value = {text}

    return (
        <>
        <div className = "container" style={{color: props.mode==='dark'? 'white': '#1f2937'}}>
            <h2 >{props.Heading}  </h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} style={{background: props.mode==='dark'? '#d4d4d8': 'white', color:props.mode==='dark'? 'black': 'black'}}onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Converet To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Converet To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaecs</button>

            <button type="button" className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white': '#1f2937'}}>
            <h6>Your Text Summary</h6>
            <p>{text.split(" ").length} words and {text.length} charachers</p>
            <hr className='bg-info'/>
            <h6>Spaces Count</h6>
            <p>{text.split(" ").length-1}</p>
            <hr className='bg-info'/>
            <p>Reading Time: {0.008 * text.split(" ").length} </p>
            <hr className='bg-info' />
            <h6>Preview</h6>
            <p>{text.length>0? text:"Enter something in the textbox to see preview here."}</p>
            <hr className='bg-info'/>
        </div>
        </>
    )
}
