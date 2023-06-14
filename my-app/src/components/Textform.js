import React, {useState} from "react";


export default function Textform(props){
    const [text, setText ] = useState("Enter text here");
    return (
        <div>
            <div className="mb-3">
                <label for="mybox" className="form-label">{props.heading}</label>
                <textarea  className="form-control" id="mybox" rows="3"  />
            </div>
            <button type="submit" className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}