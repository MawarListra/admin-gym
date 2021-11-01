import {React, useCallback, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

function Login() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () =>{
        setIsOpen(true)
    }
    const handleCloseModal = () =>{
        setIsOpen(false)
    }
    const history=useHistory();
    const handleOnClick = useCallback(
          () => {
              alert('Login berhasil!')
              history.push('/AdminDashboard')
          },
          [history],
    )
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
                            placeholder="Username" />
                        </div>
                        <div className='mb-10'>
                            <label 
                            className="block text-black text-2xl font-medium mb-2"
                            htmlFor="password">
                                Password
                            </label>
                            <input 
                            className="shadow appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 text-2xl"
                            id="password"
                            type="text"
                            placeholder="Password" />
                            {isOpen===false?( <button onClick={handleOpenModal}>
                                <AiOutlineEyeInvisible className="absolute inset-y-1 right-3 text-2xl text-mata" />
                            </button>):( <button onClick={handleCloseModal}>
                                <AiOutlineEye className="absolute inset-y-1 right-3 text-2xl text-mata" />
                            </button>)}
                        </div>
                        <button className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 w-full rounded-md focus:outline-none focus:shadow-outline text-2xl font-medium">
                            Masuk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
