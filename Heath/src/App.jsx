import { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/Dashboard/DashboardMainContent'
import './App.css'

function App() {
 
  const [activeMenuItem] = useState('Dashboard')

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar activeMenuItem={activeMenuItem} />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App