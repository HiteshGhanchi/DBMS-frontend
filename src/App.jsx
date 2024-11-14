// import './App.css"
import Homepage from "./pages/Homepage"
import LoginRegister from "./pages/LoginRegister"
import Athletes from "./pages/Athletes"
import AddAthletePage from "./pages/AddAthletePage"
import IndividualAthlete from "./pages/IndividualAthlete"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Tournaments from "./pages/Tournaments"
import AboutUs from "./pages/AboutUs"
import UpdateAthletePage from "./pages/UpdateAthletePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/athletes" element={<Athletes />}></Route>
        <Route path="/athletes/add" element={<AddAthletePage />}></Route>
        <Route path="athletes/:id" element={<IndividualAthlete />}></Route>
        <Route path="athletes/update/:id" element={<UpdateAthletePage/>}></Route>
      </Routes>
    </Router>
  )
  
}

export default App
