import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower!", "success")

    }
    const handleCopy =()=>{
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard!", "success")

    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")

    }
    const handleRemovePun=()=>{
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        let newText= text.replace(regex,"");
        setText(newText)
        props.showAlert("Remove punchutions!", "success")

    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared!", "success")

    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className='form-control' name="myBox" id="myBox" cols="30" rows="10" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
    </div>
    <div class="d-auto">
    <button type="button" className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert To UpperCase</button>
    <button type="button" className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert To LowerCase</button>
    <button type="button" className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
    <button type="button" className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button type="button" className='btn btn-primary mx-1 my-1' onClick={handleRemovePun}>Remove Punctuation</button>
    <button type="button" className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear</button>
    </div>
    </div>

    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").length} Words And {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something In The Textbox Above To Priview It Here"}</p>
    </div>
    </>
  )
}
