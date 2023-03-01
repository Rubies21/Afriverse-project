import Mainbarmodule from './CourseLanding.module.css'
import angleRight from '../../../../assets/angle-right.svg'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"
import { useState, useRef } from "react"

const CourseLanding = () => {
    const [value, setValue] = useState("");
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);

    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        };
        const handleChange = function(e) {
            e.preventDefault();
            if (e.target.files && e.target.files[0]) {
            }
        };

        const onButtonClick = () => {
            inputRef.current.click();
        };

  return (
    <div className={Mainbarmodule.container}>
      <ul className={Mainbarmodule.navigation}>
            <li ><a href="#" style={{color: 'rgba(31, 31, 31, 0.47)'}}>Create Content</a></li>
            <li><img src={angleRight}/></li>
            <li><a href="#">Plan your course</a></li>
        </ul>
        <h1>Course Landing</h1>

        <form onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            
            <label className={Mainbarmodule.Label}>
                Course title
            </label>
            <input type='text' name= 'title' placeholder='Insert your course title'/>

            <label className={Mainbarmodule.Label}> 
                Course description
            </label> 

            <div>
                <div className={Mainbarmodule.editor}>
                    <ReactQuill 
                    theme="snow" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    className={Mainbarmodule.editorText}
                    placeholder="Insert your course description"/>
                    
                </div>
                <div className={Mainbarmodule.preview}>
                    {value}
                </div>
            </div>  

            <div className={Mainbarmodule.dropdown}>
                <div className={Mainbarmodule.item}>
                    <label className={Mainbarmodule.Label}>Category</label> 
                    <div className={Mainbarmodule.selectt}>
                        <select>
                        <option>
                            Cryptocurrency
                            
                        </option>    
                    </select>
                    </div>
                    
                </div>
                
                <div className={Mainbarmodule.item} style={{paddingLeft:'50px'}}>
                   <label className={Mainbarmodule.Label}>Difficulty</label> 
                   <select>
                       <option>Beginner Level</option>    
                    </select>  
            </div> 
                </div>
                
                <label className={Mainbarmodule.Label}>
                    Cover Image
                </label>

                <label id={Mainbarmodule.labelFileUpload} className={Mainbarmodule.dragActive ? "drag-active" : "" }>

                    <div className={Mainbarmodule.dropImage}>
                        <div className={Mainbarmodule.texts}>
                            Drag and drop an image, or <button className={Mainbarmodule.uploadButton} onClick={onButtonClick}>Browse</button>
                            <p style={{color:'rgba(31, 31, 31, 0.67)'}}>400x300 pixels recommended. Max 5MB (.png,.jpg)</p>
                        </div>                  
                    </div>
                </label>     
                { dragActive && <div id={Mainbarmodule.dragFileElement} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }                   
        </form>    
    </div>
  )
}

export default CourseLanding
