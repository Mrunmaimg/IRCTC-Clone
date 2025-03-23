import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TrainList from './pages/TrainList'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TrackTrain from './pages/TrackTrain'
import { ThemeProvider } from './context/ThemeContext'

function AppContent() {
  return (
    <div className="min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trains" element={<TrainList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/track-train" element={<TrackTrain />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
} 