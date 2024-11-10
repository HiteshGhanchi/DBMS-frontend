// import './App.css"
import Homepage from "./pages/Homepage"
import LoginRegister from "./pages/LoginRegister"
import Athletes from "./pages/Athletes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/athletes" element={<Athletes />}></Route>
      </Routes>
    </Router>
  )
  
}

export default App
