import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import TestForm from './TestForm'

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#121417' }}>
        <Sidebar />
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/testform" element={<TestForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
