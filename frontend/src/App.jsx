import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Visualizer from './pages/Visualizer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualizer" element={<Visualizer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App