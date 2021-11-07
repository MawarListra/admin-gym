import React from 'react'

import Transition from '../Components/Transition.js';
import DaftarAnggota from './DaftarAnggota.js';
import Dashboard from './Dashboard.js';
import * as myIcon from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
// import { AiOutlineUserSwitch } from "react-icons/ai";
// import { MdOutlineAccountBox } from "react-icons/md";
import LogoMentor from "../Images/Logo - Mentor.png";
import {FiSearch} from "react-icons/fi";
import DataIc from '../Images/notification-status.png'
import UserIc from '../Images/user-square.png'
import DataColorIc from '../Images/notification-status-warna.png'
import UserColorIc from '../Images/user-square-warna.png'

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
                            <ul className="font-poppins font-normal text-lg justify-start">
                                <li className="pb-5 pt-6">
                                    <button onClick={() => setPages(0)} className={pages === 0 ? ("flex bg-warnarow py-4 px-2 mx-auto rounded-xl ") : ("flex py-4 px-2 mx-auto rounded-xl")}>
                                        <img alt='dashboard' src={pages === 0 ? UserColorIc : UserIc} className={pages === 0 ? ("text-primary mr-3") : ("text-second mr-3")} />
                                        <div className={pages === 0 ? ("mr-9 text-primary") : ("mr-9")}>
                                            Dashboard
                                        </div>
                                    </button>
                                </li>
                                <li className="pb-12">
                                    <button onClick={() => setPages(1)} className={pages === 1 ? ("flex bg-warnarow py-4 px-2 mx-auto rounded-xl") : ("flex py-4 px-2 mx-auto rounded-xl")}>
                                        <img alt='data' src={pages === 1 ?  DataColorIc: DataIc} className={pages === 1 ? ("text-primary mr-3") : ("text-second mr-3")} />
                                        <div className={pages === 1 ? ("mr-9 text-primary") : ("mr-9")}>
                                            Kelola Anggota
                                        </div>
                                    </button>
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
                        <h1 className="font-medium font-poppins text-2xl">{pages === 0 ? "Dashboard" : "Kelola Anggota"}</h1>
                        {pages === 0 ? (
                            <div></div>
                        ) :(
                        <div className="flex w-80 h-10 items-center p-2 text-base text-primary text-gray-700 leading-tight bg-transparent text-base border-2 rounded-md">
                            <FiSearch />
                            <input 
                                className=" focus:outline-none focus:shadow-outline ml-2 text-gray-700"
                                id="search"
                                type="text"
                                placeholder="Search" />
                        </div>
                        )}
                    </div>
                </header>
                <div className="flex-grow flex flex-col min-h-screen">
                    {pages === 0 ? <Dashboard pilih={pages} /> : <DaftarAnggota pilih={pages} />}
                </div>
            </div>

        </div >
    )
}
