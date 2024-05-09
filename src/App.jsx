import "./styles/Principal.scss"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexPage } from './page/IndexPage'
import { OurTeamPage } from "./page/OurTeamPage"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <IndexPage /> } />
				<Route path="/OurTeam" element={ <OurTeamPage /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default App
