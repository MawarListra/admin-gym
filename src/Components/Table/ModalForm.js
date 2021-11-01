import React, { Fragment, useRef } from 'react'
import { TiDelete } from "react-icons/ti";
import { Dialog, Transition } from '@headlessui/react'

function ModalForm({ closeModal, open }) {
    const cancelButtonRef = useRef(null);
    const [nama, setNama] = React.useState('');
    const [ttl, setTtl] = React.useState('');
    const [noTlp, setNoTlp] = React.useState('');
    const [alamat, setAlamat] = React.useState('');
    const [jnskelamin, setJnnKelamin] = React.useState('');
    const [durasi, setDurasi] = React.useState('');
    // const url = "https://api.wedding.chicodefive.com";


    // const addUser = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         name: nama,
    //         phone: noTlp,
    //         address: alamat,
    //     }
    //     const config = {
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token"),
    //             'Content-Type': 'application/json',
    //         },
    //     };
    //     await axios
    //         .post(`${url}/v1/User/create`, data, config)
    //         .then((res) => {
    //             console.log(res);
    //             if (res.status === 200) {
    //                 window.location = "/AdminDashboard";
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
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
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden lg:inline-block lg:align-middle lg:h-screen" aria-hidden="true">
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
                            <div className="bg-white border rounded-3xl inline-block text-left shadow-xl transform transition-all lg:my-8 lg:align-middle lg:max-w-lg lg:w-auto">
                                <Dialog.Title className="flex justify-between leading-6 font-poppins text-xl text-center px-6 py-5">
                                   Edit Anggota
                                    <TiDelete onClick={() => closeModal(false)} className="text-abuabu text-3xl" />
                                </Dialog.Title>
                                <div className="border-b-2"></div>
                                <form /*onSubmit={addUser}*/>
                                    <div className=" px-4 pt-5 pb-4 lg:p-6 lg:pb-4 items-center">
                                        <div className="flex justify-between">
                                            <div className="mr-5">
                                                <div className="text-#727286"> Nama </div>
                                                <input type="text"
                                                    value={nama}
                                                    onChange={(e) => setNama(e.target.value)} className="flex bg-abuabu border rounded-lg py-3 px-4 w-72 md:w-48 focus:outline-none mb-8 text-sm"></input>
                                            </div>
                                            <div>
                                                <div className="text-#727286">Nomor Telepon</div>
                                                <input type="tel"
                                                    pattern="[0-9]{1,20}"
                                                    value={noTlp}
                                                    onChange={(e) => setNoTlp(e.target.value)} className="flex bg-abuabu border rounded-lg py-3 px-4 w-72 md:w-48 focus:outline-none mb-8 text-sm"></input>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="mr-5">
                                                <div className="text-#727286"> Tempat, tanggal Lahir </div>
                                                <input type="text"
                                                    value={ttl}
                                                    onChange={(e) => setTtl(e.target.value)} className="flex bg-abuabu border rounded-lg py-3 px-4 w-72 md:w-48 focus:outline-none mb-8 text-sm"></input>
                                            </div>
                                            <div>
                                                <div className="text-#727286">Jenis Kelamin</div>
                                                <select 
                                                value={jnskelamin}
                                                onChange={(e) => setJnnKelamin(e.target.value)}
                                                className="flex bg-abuabu border rounded-lg py-3 px-4 w-72 md:w-48 focus:outline-none mb-8 text-sm cursor-pointer">
                                                    <option value='laki-laki'>Laki-laki</option>
                                                    <option value='perempuan'>Perempuan</option>
                                                </select>
                                                {/* <input type="tel"
                                                    pattern="[0-9]{1,20}"
                                                    value={noTlp}
                                                    onChange={(e) => setNoTlp(e.target.value)} className="flex bg-abuabu border rounded-lg py-3 px-4 w-72 focus:outline-none mb-8"></input> */}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-#727286">Alamat</div>
                                            <textarea type="text" value={alamat}
                                                onChange={(e) => setAlamat(e.target.value)} className="flex bg-abuabu border rounded-lg py-3 px-4 w-full h-30 focus:outline-none mb-8 text-sm"></textarea>
                                        </div>
                                        <div>
                                                <div className="text-#727286">Durasi Member</div>
                                                <select 
                                                value={durasi}
                                                onChange={(e) => setDurasi(e.target.value)}
                                                className="flex bg-abuabu border rounded-lg py-3 px-4 w-72 md:w-48 focus:outline-none mb-8 text-sm cursor-pointer">
                                                    <option>1 Bulan</option>
                                                    <option>3 Bulan</option>
                                                    <option>6 Bulan</option>
                                                    <option>12 Bulan</option>
                                                </select>
                                        </div>
                                        <div>
                                            <button className='w-full h-16 text-white bg-primary rounded-xl font-poppins items-center justify-center'>Save</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default ModalForm
