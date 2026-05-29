import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Involved from "./pages/Involved"
import Contact from "./pages/Contact"
import Dashboard from './pages/Dashboard'
import OverFlowDashboard from "./pages/OverFlowDashboard"
import ProjectDashboard from "./pages/ProjectDashboard"
import BLogDashboard from "./pages/BLogDashboard"
import TeamDashboard from "./pages/TeamDashboard"
import MessageDashboard from "./pages/MessageDashboard"
import VolunteerDashboard from "./pages/VolunteerDashboard"
import ProtectedRoute from './component/ProtectedRoute'
import Login from './pages/login';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/involved" element={<Involved />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={
            <ProtectedRoute >
              <Dashboard></Dashboard>
            </ProtectedRoute>}>

            <Route path="OverView" element={<OverFlowDashboard />}></Route>
            <Route path="Projects" element={<ProjectDashboard />}></Route>
            <Route path="BlogPost" element={<BLogDashboard />}></Route>
            <Route path="Team" element={<TeamDashboard />}></Route>
            <Route path="Message" element={<MessageDashboard />}></Route>
            <Route path="Volunteers" element={<VolunteerDashboard />}></Route>
          </Route>

        </Routes>
    </>
  )
}

export default App
