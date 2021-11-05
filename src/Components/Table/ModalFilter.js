import React, { Fragment, useRef, useState } from 'react'
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { Dialog, Transition } from '@headlessui/react'

function ModalFilter({closeModal, open}) {
    const cancelButtonRef = useRef(null);
    const saveFilter = () => {
        closeModal(false)
    }
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenModal = (e) =>{
        e.preventDefault();
        setIsOpen(true)
    }
    const handleCloseModal = (e) =>{
        e.preventDefault();
        setIsOpen(false)
    }
    return (
        <div>
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0" initialFocus={cancelButtonRef} onClose={closeModal}>
                <div className="flex justify-center pt-4 px-4 pb-20 text-center lg:block lg:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-0 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className=" lg:inline-block lg:align-middle lg:h-screen" aria-hidden="false">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95"
                        enterTo="opacity-100 translate-y-0 lg:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 lg:scale-100"
                        leaveTo="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95"
                    >
                        <div className="inline-block transform transition-all lg:my-8 lg:align-middle lg:max-w-lg lg:w-auto">
                            <div className='flex flex-col bg-white border-2 border-gray-200 w-64 h-80 z-10'>
                                <div className='flex flex-row justify-between text-base font-poppins px-4 pt-4'>
                                    <h1>Filters</h1>
                                    <h1 className='text-primary cursor-pointer' onClick={saveFilter}>Simpan</h1>
                                </div>
                                <div className='text-xs font-poppins space-y-2 mt-2'>
                                    <div className='px-4 text-left flex flex-row space-x-2'>
                                        {isOpen === false ? (<button onClick={handleOpenModal}>
                                            <AiOutlineDown className='w-6 h-4'/>
                                        </button>):(<button onClick={handleCloseModal}>
                                            <AiOutlineRight className='w-6 h-4'/>
                                        </button>
                                        )}
                                        <p>Status Anggota</p>
                                    </div>
                                    <div className='flex flex-col bg-gray-200 py-2 px-4 space-y-4'>
                                        <div className='flex items-center space-x-2'>
                                            <input className='w-6 h-6' type='checkbox'/>
                                            <label>Semua</label>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <input className='w-6 h-6' type='checkbox'/>
                                            <label>Aktif</label>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <input className='w-6 h-6' type='checkbox'/>
                                            <label>Tidak Aktif</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-xs font-poppins space-y-2 mt-2'>
                                    <div classname='px-4 text-left flex flex-row space-x-2'>
                                        {isOpen === false ? (<button onClick={handleOpenModal}>
                                            <AiOutlineDown className='w-6 h-4'/>
                                        </button>):(<button onClick={handleCloseModal}>
                                            <AiOutlineRight className='w-6 h-4'/>
                                        </button>
                                        )}
                                        <p>Jenis Kelamin</p>
                                    </div>
                                    <div className='flex flex-col bg-gray-200 py-2 px-4 space-y-4'>
                                        <div className='flex items-center space-x-2'>
                                            <input className='w-6 h-6' type='checkbox'/>
                                            <label>Laki-laki</label>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <input className='w-6 h-6' type='checkbox'/>
                                            <label>Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
        </div>
    )
}

export default ModalFilter
