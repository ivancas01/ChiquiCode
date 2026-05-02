import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { IndexPage } from './page/IndexPage'
import { OurTeamPage } from './page/OurTeamPage'

import './styles/Principal.scss'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/OurTeam" element={<OurTeamPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
