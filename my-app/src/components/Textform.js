import React, {useState} from "react";


export default function Textform(props){
    const handleUpClick = () =>{
        console.log("uppercase was clicked..."+ text);
        let newText = text.toUpperCase();
        setText(newText);
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
        <div className="container">
             <h2 className="form-label">{props.heading} </h2>
            <div className="mb-3">
                <textarea  className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="3"  />
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>

        <div className="container my-4">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words, and {text.length} characters.. </p>
        </div>
        </>
    )
}