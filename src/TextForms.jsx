import React ,{useState}from 'react'
import App from './App';
export default function TextForms(props) {
    const[text,setText]=useState("Enter Text Here?")
    const[font,setFont]=useState("Arial")

      const handleUpClick=()=>{
        // console.log("Uppercase was clicked " +text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
      };

      const handleDownClick=()=>{
        // console.log("Lowercase was clicked " +text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
      };

      const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value)
        
      };

      const handleClearClick=()=>{
        // console.log("On Change");
        setText('')
        props.showAlert("Text was cleared!","success")
        
      };

    //   const handleChangeClick=()=>{
    //     setFont(prevFont => prevFont === "Arial" ? "Courier New" : "Arial");
        
    //   };

      const handleCopyClick=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges(); 
        props.showAlert("Text copied to clipboard!","success")
      }


    
  return (
    <>
    <div className="container">
        <h1 className='mb-4'>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
         </div>
         <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert To Uppercase</button>
         <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleDownClick}>Convert To Lowercase</button>
         <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear</button>
         {/* <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleChangeClick}>Change Font</button> */}
         <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy Text</button>


    </div>
       
       <div className="container my-3" >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length } Words and {text.length} Characters</p>
        <p>{0.008 *text.split(" ").filter((element)=>{return element.length!=0}).length } Minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        
       </div>
    </>
  )
}
