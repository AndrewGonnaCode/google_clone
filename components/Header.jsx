import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {
	const router = useRouter()
	const inputSearchRef = useRef()
	const search = e => {
		e.preventDefault()
		const term = inputSearchRef.current.value;
		if (!term) return
		router.push(`/search?term=${term}`)
	}

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
					height={40}
					width={120}
					onClick={() => router.push('/')}
					className="cursor-pointer"
				/>
				<form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
					<input type="text" ref={inputSearchRef} className="flex-grow w-full focus:outline-none" />
					<XIcon
						className="h-7 sm:mr-3 text-gray-500 cursor-pointer cursor-pointer transition duration-100
					transform hover:scale-125" onClick={() => inputSearchRef.current.value = ''} />
					<MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
					<SearchIcon onClick={search} className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
					<button hidden type="submit" onClick={search}>Search</button>
				</form>
				<Avatar className="ml-auto" url="https://s9.vcdn.biz/static/f/2260917081/image.jpg" />
			</div>
			<HeaderOptions />
		</header>
	)
}

export default Header
