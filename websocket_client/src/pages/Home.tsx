import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Socket } from 'socket.io-client'

const Home = ({ socket }: { socket: Socket }) => {
	const [user, setUser] = useState('')
	const navigate = useNavigate()

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (user) {
			setUser('')
		}
		localStorage.setItem('user', user)
		socket.emit('newUser', { user, socketId: socket.id })
		navigate('/chat')
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='w-full h-screen flex justify-center items-center flex-col gap-y-4'
		>
			<h2 className='text-2xl font-bold'>Вход в чат</h2>
			<label htmlFor='user' className=''></label>
			<input
				value={user}
				onChange={e => setUser(e.target.value)}
				type='text'
				id='user'
				placeholder='Введите имя'
				className='text-white focus:outline-none bg-gray-500 p-2 rounded-lg'
			/>
			<button
				type='submit'
				className='bg-green-500 hover:bg-green-500/80 p-4 w-[150px] rounded-lg transition
      text-white'
			>
				Войти
			</button>
		</form>
	)
}

export default Home
