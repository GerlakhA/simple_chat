import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import { ISocketUser } from '../types/IDataSocket.interface'

const Sidebar = ({ socket }: { socket: Socket }) => {
	const [users, setUsers] = useState<ISocketUser[]>([])

	useEffect(() => {
		socket?.on('responseNewUser', (data: ISocketUser[]) => {
			setUsers(data)
		})
	}, [socket, users])
	const filter = users.filter(
		(item, index, self) =>
			index ===
			self.findIndex(t => t.user === item.user && t.socketId === item.socketId)
	)
	return (
		<div className='border-r border-neutral-600 flex flex-col w-[150px] h-screen p-8'>
			<h4 className='text-3xl text-gray-500 mb-4'>Users</h4>
			<ul className='flex flex-col justify-center items-center gap-y-4'>
				{filter.map(item => (
					<li key={item.socketId}>{item.user}</li>
				))}
			</ul>
		</div>
	)
}

export default Sidebar
