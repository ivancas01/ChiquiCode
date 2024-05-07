import "./styles/Principal.scss"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexPage } from './page/IndexPage'

function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={ <IndexPage /> } />
			</Routes>
		</BrowserRouter>
  )
}

export default App
