import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IDataSocket } from '../types/IDataSocket.interface'

interface IMessageBody {
	messages: IDataSocket[]
	status: string
}

const MessageBody: FC<IMessageBody> = ({ messages, status }) => {
	const navigate = useNavigate()
	const handleLeaveChat = () => {
		localStorage.removeItem('user')
		navigate('/')
	}
	return (
		<>
			<header className='w-full  flex justify-end p-2'>
				<button
					onClick={handleLeaveChat}
					className='w-[150] rounded-lg bg-red-500 text-white p-2 hover:bg-red-500/80 transition'
				>
					Покинуть чат
				</button>
			</header>
			<div className='p-2 w-full overflow-y-auto h-[85%]'>
				{messages?.map(item =>
					item.name === localStorage.getItem('user') ? (
						<div key={item.id} className='w-full flex justify-end'>
							<div className='min-w-[50px] max-w-[250px] min-h-[50px] max-h-[50%]'>
								<p className='text-neutral-400'>Вы</p>
								<p className='bg-purple-500 p-2 text-white rounded-xl rounded-tl-none'>
									{item.text}
								</p>
							</div>
						</div>
					) : (
						<div key={item.id} className='w-full flex justify-start'>
							<div className='min-w-[50px] max-w-[250px] min-h-[50px] max-h-[50%]'>
								<p className='text-black'>{item.name}</p>
								<p className='bg-neutral-500 p-2 text-white rounded-xl rounded-tl-none'>
									{item.text}
								</p>
							</div>
						</div>
					)
				)}
				<div>
					<p className='fixed bottom-[8%] text-neutral-400 ml-10'>{status}</p>
				</div>
			</div>
		</>
	)
}

export default MessageBody
