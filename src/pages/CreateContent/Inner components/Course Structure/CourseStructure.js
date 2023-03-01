import CourseModule from "./CourseStructure.module.css"
import angleRight from "../../../../assets/angle-right.svg"
// import Footer from "../../../../components/Footer"
 import {MdModeEdit} from "react-icons/md"
 import {RiDeleteBin6Line} from "react-icons/ri"
 import {GrFormAdd} from "react-icons/gr"

const CourseStructure = () => {
    const Edit = () =>{
 
    }
  return (
    <div className={CourseModule.wholeContainer}>
    <div className={CourseModule.container}>
          
        <ul className={CourseModule.navigation}>
            <li ><a href="#" style={{color: 'rgba(31, 31, 31, 0.47)'}}>Create Content</a></li>
            <li><img src={angleRight}/></li>
            <li><a href="#">Plan your course</a></li>
        </ul>
        <h1 className={CourseModule.header}>Course Structure</h1>

        <div className={CourseModule.sectionOne}>
            <h1>Section 1: Welcome, welcome <MdModeEdit onClick={Edit}/><RiDeleteBin6Line/></h1>
            <div className={CourseModule.subInfo}>
            <p className={CourseModule.paragraphOne}>Lecture 1. Introduction to course <MdModeEdit/><RiDeleteBin6Line/></p>
            <p className={CourseModule.description}>Description: In this lecture, you'll be introduced to this amazing course. So sit back and relax!</p>
            <p className={CourseModule.addition}><GrFormAdd/>Add Lecture</p>            
            </div>

        </div>
        <div className={CourseModule.sectionOne}>
        <div className={CourseModule.subInfo}>
            <h1>Fundamentals of NFT - Part 1</h1>
            <p className={CourseModule.paragraphOne}>Lecture 1. Introduction to course <MdModeEdit/><RiDeleteBin6Line/></p>
            <p className={CourseModule.paragraphOne}>Lecture 2. Introduction to course</p>
            <p className={CourseModule.paragraphOne}>Lecture 3. Introduction to course<MdModeEdit/><RiDeleteBin6Line/></p>
            
            <p className={CourseModule.addition}><GrFormAdd/>Add Lecture</p>
           </div>
        </div>
        <button className={CourseModule.addSection}>Add Section</button>
        </div>
        
        {/* <Footer progress='37%' buttonName='Save Progress' /> */}
    </div>
  )
}

export default CourseStructure
