import React, {useState} from "react";


export default function Textform(props){
    const handleUpClick = () =>{
        console.log("uppercase was clicked..."+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("convert into uppercase","success");
    }

    const handleOnchange = (event) =>{
        console.log("on Change..")
        setText(event.target.value);
        
    }
    const handleLoClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const [text, setText ] = useState("Enter text here");
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}} >
            <h2  className="form-label">{props.heading} </h2>
            <div className="mb-3">
                <textarea  className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="3"  />
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>

        <div className="container my-4" style={{color: props.mode === 'dark'?'grey':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words, and {text.length} characters.. </p>
        </div>
        </>
    )
}