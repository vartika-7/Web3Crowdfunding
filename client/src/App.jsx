import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar } from './components'
import CreateCampaign from './pages/CreateCampaign'  // ✅ Import your component
import CampaignDetails from './pages/CampaignDetails'
import Profile from './pages/Profile'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} /> {/* ✅ Fix here */}
        </Routes>
      </div>
    </div>
  )
}

export default App