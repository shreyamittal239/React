import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was Clicked" + text);
        let newtext = text.toUpperCase();
            setText(newtext)
      props.showAlert("Converted To Uppercase", "success")
    }

      const handleLowClick = () => {
        console.log("Lowercase was Clicked" + text);
        let newtext = text.toLowerCase();
            setText(newtext)
        props.showAlert("Converted To Lowercase", "success")
    }

     const handleClearClick = () => {
        console.log("text cleared" + text);
        let newtext =" ";
            setText(newtext)
        
    }

    const handleOnChange =(event) =>{
        console.log("on change");
        setText(event.target.value);
    }

    const handleCopyClick=()=>{
         var text = document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value);
    }

    const handleDownload = ()=> {
      const element = document.createElement("a");

  const file = new Blob([text], {
    type: "text/plain"
  });

  element.href = URL.createObjectURL(file);
  element.download = "textutils.txt";

  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
    }

    const handleExtraSpace =() => {
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
    }
    const insertFor =() => {
      let newtext = text.split(" ").join( " for ") +(" for ");
      setText(newtext);
    }

    const handleReplace = ()=> {
         let newText = text.replaceAll(findText, replaceText);
           setText(newText);
    }

    const [ text , setText ] = useState('');
    const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10">
  </textarea>
  <div className="my-3">
  <label className="form-label">
    Find Text
  </label>

  <input
    type="text"
    className="form-control"
    value={findText}
    onChange={(e) => setFindText(e.target.value)}
  />
</div>

<div className="my-3">
  <label className="form-label">
    Replace With
  </label>

  <input
    type="text"
    className="form-control"
    value={replaceText}
    onChange={(e) => setReplaceText(e.target.value)}
  />
</div>
</div>

<button className='btn btn-primary ' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
<button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
<button className='btn btn-primary mx-2' onClick={handleDownload}>Download Text</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Handle Extra Spaces</button>
<button className='btn btn-primary mx-2' onClick={insertFor}>Insert for</button>
<button className='btn btn-primary mx-2' onClick={handleReplace}>Find and Replace</button>
</div>

<div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length}characters </p>
  <p>{0.008 * text.split(" ").length} minutes</p>
  <h2>Preview</h2>
  <p>{text.length>0 ? text : "Enter text to preview"}</p>
</div>
    </>
  )
}
