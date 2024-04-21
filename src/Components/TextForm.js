import React from 'react'
import { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    let handleUpClick = () => {
        // console.log("Button was clicked")
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase", "success")
    }
    let handleLoClick = () => {
        // console.log("Button was clicked")
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase", "success")
    }
    
    let handleClearClick = ()=>{
        setText('')
        props.showAlert("Textbox Cleared", "success")
    }

    let handleInverseClick = ()=>{
        let str = text
        console.log(str)
        let newStr = ""
        for(let i = 0 ; i < str.length ; i++){
            let upper = str[i].toUpperCase()
            if(upper === str[i]){
                newStr += str[i].toLowerCase()
            }
            else{
                newStr += str[i].toUpperCase()
            }
        }
        setText(newStr)

        props.showAlert("Inversed Case of Words", "success")
    }
    
    let removeExtraSpaces = ()=>{
        let newStr = text.split(/[ ]+/)
        setText((newStr.join(" ")))

        props.showAlert("Removed Extra Spaces", "success")
    }
    let handleChange = (event) => {
        // console.log(event)
        setText(event.target.value)
    }
    return (
        <>
            <div className='text-area '>
                <h1 style = {{color: props.mode === 'light' ? 'grey':'#03628f'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={text} onChange={handleChange} className="form-control" id="my-box" rows="8" style={{backgroundColor: props.mode === 'light' ? 'white':'#404c52', color: 'black'}}></textarea>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-outline-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-outline-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button type="button" className="btn btn-outline-primary mx-2" onClick={handleInverseClick}>Inverse Case</button>
                <button type="button" className="btn btn-outline-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3 mx-5 mb-3" style = {{color: props.mode === 'light' ? 'grey':'#03628f'}}>
                <h2>Text Summary</h2>
                <p style = {{color: props.mode === 'light' ? 'grey':'#404c52'}}>{text.length===0?`Your paragraph has 0 words` :`Your paragraph has ${text.split(' ').length} words`} and {text.length} characters.</p>
            </div>
            <div className="container my-3 mx-5 mb-3" style = {{color: props.mode === 'light' ? 'grey':'#03628f'}}>
                <h2>Preview</h2>
                <p style = {{color: props.mode === 'light' ? 'grey':'#404c52'}}>{text.length === 0 ? "Please write something to show preview..." :  text}</p>
            </div>
            <div className="container my-3 mb-3 mx-5" style = {{color: props.mode === 'light' ? 'grey':'#03628f'}}>
                <h3>You will need {Math.round(0.00420168067 * text.split(' ').length)} minutes in average to read this paragraph.</h3>
            </div>
        </>

    )
}
