import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import TrainSearch from './pages/TrainSearch'
import TrainList from './pages/TrainList'
import TrackTrain from './pages/TrackTrain'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/train-search" element={<TrainSearch />} />
          <Route path="/train-list" element={<TrainList />} />
          <Route path="/track-train" element={<TrackTrain />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
