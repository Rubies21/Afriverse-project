import Mainbarmodule from './Mainbar.module.css'
import angleRight from '../../../assets/angle-right.svg'
import Nav from '../../../components/Nav'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"
import { useState } from "react"
import dropDown from "../../../assets/dropDown.svg"
const Mainbar = () => {
    const [value, setValue] = useState("");

  return (
    <div className={Mainbarmodule.container}>
        <Nav/>
      <ul className={Mainbarmodule.navigation}>
            <li><a href="#" style={{color: 'rgba(31, 31, 31, 0.47)'}}>Create Content</a></li>
            <li><img src={angleRight}/></li>
            <li><a href="#">Plan your course</a></li>
        </ul>
        <h1>Course Landing</h1>

        <form>
            
            <label>
                Course title
            </label>
            <input type='text' name= 'title' placeholder='Insert your course title'/>

            <label>
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
                    <label>Category</label> 
                    <div className={Mainbarmodule.selectt}>
                        <select>
                        <option>
                            Cryptocurrency
                            
                        </option>    
                    </select>
                    </div>
                    
                </div>
                
                <div className={Mainbarmodule.item} style={{paddingLeft:'50px'}}>
                   <label>Difficulty</label> 
                   <select>
                       <option>Beginner Level</option>    
                    </select>  
            </div> 
                </div>
                
                <label>
                    Cover Image
                </label>
                <div className={Mainbarmodule.dropImage}>
                    <div className={Mainbarmodule.texts}>
                        Drag and drop an image, or <a href="#">Browse</a>
                    <p>400x300 pixels recommended. Max 5MB (.png,.jpg)</p>
                    </div>

                    
                    
                </div>
                        
        </form>
        
    </div>
  )
}

export default Mainbar
