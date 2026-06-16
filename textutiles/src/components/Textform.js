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
    const [ text , setText ] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
</div>

<button className='btn btn-primary ' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to Lowercase</button>
<button className='btn btn-primary' onClick={handleClearClick}>Clear Text</button>
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
