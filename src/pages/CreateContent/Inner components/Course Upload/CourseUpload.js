import React from 'react'
import angleRight from "../../../../assets/angle-right.svg"
import CourseUploadMod from "./CourseUpload.module.css"
import BrowseUpload from './BrowseUpload'
import {RxTriangleUp} from "react-icons/rx"

const CourseUpload = () => {
    
  return (
    <div className={CourseUploadMod.container}>
      <ul className={CourseUploadMod.navigation}>
            <li ><a href="#" style={{color: 'rgba(31, 31, 31, 0.47)'}}>Create Content</a></li>
            <li><img src={angleRight}/></li>
            <li><a href="#">Plan your course</a></li>
        </ul>
        <h1 className={CourseUploadMod.header}>Course Video Upload</h1>
        <h1 className={CourseUploadMod.subHeader}>Section 1: Welcome, Welcome <RxTriangleUp/></h1>

        <div className={CourseUploadMod.videoUpload}>
            <div className={CourseUploadMod.row1}>
                <div className={CourseUploadMod.video}>
                    <BrowseUpload/>
                    <p style={{paddingTop:'17px', color:'rgba(31, 31, 31, 0.87)'}}> Lecture 1. Introduction to the course </p>
                </div>

                <div className={CourseUploadMod.video}>
                    <BrowseUpload/>
                    <p style={{paddingTop:'17px', color:'rgba(31, 31, 31, 0.87)'}}> Lecture 2. Introduction to the course </p>
                </div>
                
            </div>

            <h1 className={CourseUploadMod.subHeader}>Section 2: Fundamentals of NFT - Part 1 <RxTriangleUp/></h1>
            <div className={CourseUploadMod.fundamentals}>
            
                <div className={CourseUploadMod.video}>
                    <BrowseUpload/>
                    <p style={{paddingTop:'17px', color:'rgba(31, 31, 31, 0.87)'}}> Lecture 1. Introduction to the course </p>
                </div>

                <div className={CourseUploadMod.video}>
                    <BrowseUpload/>
                    <p style={{paddingTop:'17px', color:'rgba(31, 31, 31, 0.87)'}}> Lecture 2. Introduction to the course </p>
                </div>

                <div className={CourseUploadMod.video}>
                    <BrowseUpload/>
                    <p style={{paddingTop:'17px', color:'rgba(31, 31, 31, 0.87)'}}> Lecture 2. Introduction to the course </p>
                </div>
                
            
            </div>
        </div>
    </div>

    
    
  )
}

export default CourseUpload
