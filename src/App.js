import './index.css'
import Explore from './pages/Explore/Explore'
import CreateContent from "./pages/CreateContent/CreateContent";
import LiveStream from './pages/LiveStream/LiveStream';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseLanding from "./pages/CreateContent/Inner components/Course Landing/CourseLanding"
import CourseStructure from './pages/CreateContent/Inner components/Course Structure/CourseStructure';
import CourseUpload from './pages/CreateContent/Inner components/Course Upload/CourseUpload';
import Main from './pages/Explore/Inner components/Main'
import NFTs from './pages/Explore/Inner components/NFTs';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore/>}>
          <Route path = "/" element={<Main/>}/>
          <Route path = "/NFTs" element ={<NFTs/>}/>
        </Route>
        <Route element={<CreateContent/>} >
          <Route path = "/create/" element={<CourseLanding/>} />
          <Route path="/course-structure" element={<CourseStructure/>}/>
          <Route path="/course-upload" element={<CourseUpload/>}/>
        </Route>
        <Route path = "/live" element={<LiveStream/>} />

      </Routes>
    </Router>
  )
}

export default App
