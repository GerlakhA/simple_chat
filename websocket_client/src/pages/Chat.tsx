import { FC, useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import MessageBody from '../components/MessageBody'
import MessageInput from '../components/MessageInput'
import Sidebar from '../components/Sidebar'
import { IDataSocket } from '../types/IDataSocket.interface'

interface IChat {
	socket: Socket
}

const Chat: FC<IChat> = ({ socket }) => {
	const [messages, setMessages] = useState<IDataSocket[]>([])

	useEffect(() => {
		socket.on('response', (data: any) => {
			setMessages([...messages, data])
		})
	}, [messages, socket])
	return (
		<div className='flex w-full h-screen items-center'>
			<Sidebar />
			<main className='w-full h-full'>
				<MessageBody messages={messages} />
				<MessageInput socket={socket} />
			</main>
		</div>
	)
}

export default Chat
