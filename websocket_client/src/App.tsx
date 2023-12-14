import { Route, Routes } from 'react-router-dom'
import io from 'socket.io-client'
import './App.css'
import Chat from './pages/Chat'
import Home from './pages/Home'

const socket = io('http://localhost:3333')

function App() {
	// const [count, setCount] = useState(0)

	return (
		<Routes>
			<Route element={<Home />} path='/' />
			<Route element={<Chat socket={socket} />} path='/chat' />
			<Route element={<h1>404 Page Not found</h1>} path='*' />
		</Routes>
	)
}

export default App
