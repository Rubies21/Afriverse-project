import Index from './index.module.css'
import Explore from './pages/Explore/Explore'
import CreateContent from "./pages/CreateContent/CreateContent";
import LiveStream from './pages/LiveStream/LiveStream';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainbar from './pages/CreateContent/Inner components/Mainbar';
import CourseStructure from './pages/CreateContent/Course Structure/CourseStructure';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
          
          <Route path = "/create" element={<CreateContent/>} >
            <Route path = "/create/" element={<Mainbar/>} />
          </Route>
          <Route path="/course-structure" element={<CourseStructure/>}/>
          <Route path = "/live" element={<LiveStream/>} />

      </Routes>
    </Router>
  )
}

export default App
