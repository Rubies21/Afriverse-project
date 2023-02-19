import CourseModule from "./CourseStructure.module.css"
import angleRight from "../../../assets/angle-right.svg"
import Footer from "../../../components/Footer"

const CourseStructure = () => {
  return (
    <div>
    <div className={CourseModule.container}>
          
        <ul className={CourseModule.navigation}>
            <li ><a href="#" style={{color: 'rgba(31, 31, 31, 0.47)'}}>Create Content</a></li>
            <li><img src={angleRight}/></li>
            <li><a href="#">Plan your course</a></li>
        </ul>
        <h1 className={CourseModule.header}>Course Structure</h1>

        <div className={CourseModule.sectionOne}>
            <h1>Section 1: Welcome, welcome</h1>
            <p>Lecture 1. Introduction to course</p>
            <p>Description: In this lecture, you'll be introduced to this amazing course. So sit back and relax!</p>
            <p>Add Lecture</p>
        </div>
        <div className={CourseModule.sectionOne}>
            <h1>Fundamentals of NFT - Part 1</h1>
            <p>Lecture 1. Introduction to course</p>
            <p>Lecture 2. Introduction to course</p>
            <p>Lecture 2. Introduction to course</p>
            <p>Add Lecture</p>
        </div>

        </div>
        <Footer progress='37%' buttonName='Save Progress' />
    </div>
  )
}

export default CourseStructure
