import React from 'react'
import {RiFolderUploadFill} from "react-icons/ri"
import CourseUploadMod from "./CourseUpload.module.css"

const BrowseUpload = () => {
    const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  const handleFile = (files) => {
    alert("Number of files: " + files.length);
  }
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };
  
// triggers the input when the button is clicked
  const LinkClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
        <div className={CourseUploadMod.box}>
          <div className={CourseUploadMod.content}>
            <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
              <input ref={inputRef} type="file" id={CourseUploadMod.inputFile} multiple={true} onChange={handleChange} style={{visibility:'hidden'}}/>
              <label id={CourseUploadMod.labelFile} className={dragActive ? "drag-active" : "" }>
                <span className={CourseUploadMod.line1}><RiFolderUploadFill color=' rgba(31, 31, 31, 0.67)' size={30} /></span> <br/>
                <p className={CourseUploadMod.line2}>Drag and drop a video, or <a href="#" className={CourseUploadMod.uploadLink} onClick={LinkClick} style={{textDecoration:'none', color:'#2664DD'}}>Browse</a></p>
                <p className={CourseUploadMod.line2}>Max 500MB(.mp4, .flv)</p>

              
              </label>
            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            </form>
                
            </div>
                        
          </div>
    </div>
  )
}

export default BrowseUpload
