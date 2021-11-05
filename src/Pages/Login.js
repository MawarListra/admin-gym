import {React, useState} from 'react'
// import {useHistory} from 'react-router-dom'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

function Login() {
    const [isOpen, setIsOpen] = useState(false)

    const data = {
        username: '',
        password: '',
    }
    const handleOpenModal = (e) =>{
        e.preventDefault();
        setIsOpen(true)
    }
    const handleCloseModal = (e) =>{
        e.preventDefault();
        setIsOpen(false)
    }
    const handleOnClick = (e) =>{
        e.preventDefault();
        alert('Login Success')
        window.location="/AdminDashboard"
    }
    return (
        <div className='bg-white'>
            <div className='flex h-screen'>
                <div className='w-1/3 m-auto'>
                    <form className="bg-white px-8 pt-6 pb-8 mb-4" onSubmit={handleOnClick}>
                        <h1 className="text-center m-12 font-medium text-3xl">Selamat Datang</h1>
                        <div className='mb-8'>
                            <label 
                            className="block text-black text-2xl font-medium mb-2"
                            htmlFor="username">
                                Username
                            </label>
                            <input 
                            className="shadow appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 text-2xl"
                            id="username"
                            type="text"
                            placeholder="Username" 
                            onChange={(e) => (data.username = e.target.value)}/>
                        </div>
                        <div className='mb-10'>
                            <label 
                            className="block text-black text-2xl font-medium mb-2"
                            htmlFor="password">
                                Password
                            </label>
                            <div className='flex flex-row'>
                                <input 
                                className="shadow appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 text-2xl"
                                id="password"
                                type={isOpen === false ? 'password':'text'}
                                placeholder="Password"
                                onChange={(e) => (data.password = e.target.value)} />
                                {isOpen === false ? ( <button onClick={handleOpenModal}>
                                    <AiOutlineEyeInvisible className=" inset-y-1 right-3 text-2xl text-mata z-10" />
                                </button>):( <button onClick={handleCloseModal}>
                                    <AiOutlineEye className=" inset-y-1 right-3 text-2xl text-mata z-10" />
                                </button>)}
                            </div>
                        </div>
                        <button 
                        className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 w-full rounded-md focus:outline-none focus:shadow-outline text-2xl font-medium">
                            Masuk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
