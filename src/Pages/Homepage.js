import React from 'react'

import Transition from '../Components/Transition.js';
import DaftarAnggota from './DaftarAnggota.js';
import * as myIcon from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlineUserSwitch } from "react-icons/ai";
import LogoMentor from "../Images/Logo - Mentor.png";
import {FiSearch} from "react-icons/fi";

export default function Homepage() {
    const [isClose, setClosed] = React.useState(false);
    const [pages, setPages] = React.useState(0);

    const logout = () => {
        localStorage.clear();
        window.location = '/';
    }

    // if (localStorage.getItem("token") === null) {
    //     window.location = '/admin';
    // }
    return (
        <div className="flex bg-gray-100">
            <Transition
                show={!isClose} enter="transition-all duration-500"
                enterFrom="-ml-64"
                enterTo="ml-0"
                leave="transition-all duration-500"
                leaveTo="-ml-64"
            >

                < aside className="bg-white min-w-64 min-h-screen flex flex-col ">
                    <div className="bg-white border-r px-4 h-24 flex items-center justify-end">
                        <span className="text-blue px-10 mt-2">
                            <img alt="logo" src={LogoMentor}/>
                        </span>
                        {isClose ? (
                            <div></div>
                        ) : (
                            <button aria-label="Close menu" title="Close menu" onClick={() => setClosed(true)}><myIcon.BiMenuAltRight className="text-4xl" /></button>)}
                    </div>

                    <div className="border-r flex-grow relative">

                        <nav >
                            <ul className="font-poppins font-normal text-lg ">
                                <li className="pb-5 pt-6">
                                    {pages === 0 ? (<button onClick={() => setPages(0)} className="flex items-center text-primary bg-warnarow py-4 px-2 mx-auto rounded-xl w-56 justify-center">
                                        <AiOutlineUserSwitch className="border-2 border-primary text-primary rounded-md w-5 h-5 mr-3" />
                                        Kelola Anggota
                                    </button>) : (<button onClick={() => setPages(0)} className="flex items-center py-4 px-2 mx-auto rounded-xl">
                                        <AiOutlineUserSwitch className="border-2 border-second  rounded-md w-5 h-5 mr-3" />
                                        Kelola Anggota
                                    </button>)}
                                </li>
                                <li className="flex items-center text-red-500 absolute inset-x-0 bottom-5">
                                    <button className="flex" onClick={() => logout()}>
                                        <MdOutlineLogout className="text-2xl ml-14 mx-4" />
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </aside>
            </Transition>

            <div className="bg-white flex-grow flex flex-col min-h-screen">
                <header className=" border-b h-24 flex items-center justify-center">
                    {isClose ? (
                        <button aria-label="Open menu" title="Open menu" onClick={() => setClosed(false)}><myIcon.BiMenu className="text-4xl" /></button>
                    ) : (<button aria-label="Close menu" title="Close menu" onClick={() => setClosed(true)} className="hidden"><myIcon.BiMenuAltRight className="text-4xl" /></button>)}
                    <div className="flex flex-grow items-center justify-left px-3 space-x-20">
                        <h1 className="font-medium font-poppins text-2xl">Kelola Anggota</h1>
                        <div className="flex w-80 h-10 items-center p-2 text-base text-primary text-gray-700 leading-tight bg-transparent text-base border-2 rounded-md">
                            <FiSearch />
                            <input 
                                className=" focus:outline-none focus:shadow-outline ml-2 text-gray-700"
                                id="search"
                                type="text"
                                placeholder="Search" />
                        </div>
                    </div>
                </header>
                <div className="flex-grow flex flex-col min-h-screen">
                    <DaftarAnggota pilih={pages} />
                </div>
            </div>

        </div >
    )
}
