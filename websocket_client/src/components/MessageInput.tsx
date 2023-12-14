import { ChangeEvent, FC, useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { Socket } from 'socket.io-client'

interface IMessageInput {
	socket: Socket
}

const MessageInput: FC<IMessageInput> = ({ socket }) => {
	const [message, setMessage] = useState('')

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (message.trim() && localStorage.getItem('user')) {
			socket.emit('message', {
				text: message,
				name: localStorage.getItem('user'),
				id: `${socket.id}-${Math.random()}`,
				socketID: socket.id,
			})
		}

		setMessage('')
	}

	return (
		<form onSubmit={handleSubmit} className='flex gap-x-4 w-[90%] p-2 ml-10'>
			<input
				type='text'
				value={message}
				onChange={e => setMessage(e.target.value)}
				placeholder='Enter message...'
				className='text-white focus:outline-none bg-gray-500 p-2 rounded-lg w-full '
			/>
			<button
				type='submit'
				className='w-[45px] h-[45px] rounded-full bg-blue-500 hover:bg-blue-500/60 flex justify-center items-center cursor-pointer'
			>
				<FiSend className='text-white text-xl' />
			</button>
		</form>
	)
}

export default MessageInput
