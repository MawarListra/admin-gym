import React,{useMemo,  useState, } from "react";
import { useTable, useGlobalFilter, usePagination, useFilters } from "react-table";


import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineDown,  AiOutlineRight} from "react-icons/ai";
import { VscFilter } from "react-icons/vsc";
// import GlobalFilter from "./GlobalFilter";
import ModalForm from "./ModalForm";
import { ColumnFilter } from "./ColumnFilter"
// import { Menu, Transition } from '@headlessui/react'
import GrafikIc from '../../Images/GrafikIc.png'
import { createPopper } from "@popperjs/core";


function Table({ columns, data, banyak, pilih }) {
    const defaultColumn = useMemo(() => {
        return{
            Filter:ColumnFilter
        }
    },[])
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,

        // state,
        // preGlobalFilteredRows,
        // setGlobalFilter,
    } = useTable({
        columns,
        data,
        defaultColumn,
        initialState: { pageSize: 10 },
    }, useFilters,useGlobalFilter, usePagination
    )
    
  
    const [indexs, setIndex] = React.useState(0);
    const pageNumber = [];
    const [last, setLast] = React.useState(4);
    const [first, setFirst] = React.useState(0);

    const [open, setOpen] = React.useState(false);
    const [opsi, setOpsi] = React.useState(0)
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef()
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: 'bottom-start'
        });
        setDropdownPopoverShow(true)
    }
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false)
    }
    // const [openFilter, setOpenFilter] = React.useState(false)

    const handleClickAdd = () =>{
        setOpsi(0)
        setOpen(true)
        console.log(opsi)
    }
    const handleClickFilter = () => {
        if(dropdownPopoverShow === true){
            closeDropdownPopover()
        }else{
            openDropdownPopover()
        }
        console.log('clicked')
    }

    const saveFilter = (e) => {
        e.preventDefault()
        setDropdownPopoverShow(false)
        // alert('saved')
    }
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenJns, setIsOpenJns] = useState(false)
    const [kategori, setKategori] = useState(false)
    const [kategoriJns, setKategoriJns] = useState(false)
    const handleOpenModal = (e) =>{
        e.preventDefault();
        setIsOpen(true)
        setKategori(true)
    }
    const handleCloseModal = (e) =>{
        e.preventDefault();
        setIsOpen(false)
        setKategori(false)
    }
    const handleOpenModalJns = (e) =>{
        e.preventDefault();
        setIsOpenJns(true)
        setKategoriJns(true)
    }
    const handleCloseModalJns = (e) =>{
        e.preventDefault();
        setIsOpenJns(false)
        setKategoriJns(false)
    }


    for (let i = first; i <= last; i++) {
        pageNumber.push(i);
    }
    if (indexs > last) {
        setLast(last + 1);
        setFirst(first + 1);
    }
    if (indexs < first) {
        setLast(last - 1);
        setFirst(first - 1);
    }
    return (
        <div>
            {pilih === 0 ? (
                <div className="mt-2 flex flex-col pb-8">
                    <div className='flex flex-col space-y-4'>
                        <div className="text-2xl font-poppins font-semibold text-primary mt-5">
                            Total Member
                        </div>
                        <div className='flex flex-row space-x-8'>
                            <div className='w-64 h-44 rounded-2xl bg-green-100 font-poppins '>
                                    <img className='ml-4 mt-6' alt='grafik' src={GrafikIc} />
                                    <h1 className=' ml-6 text-3xl font-medium text-black'>167</h1>
                                    <p className='ml-6 text-xl text-blue-500'>Total Member</p>
                            </div>
                            <div className='w-64 h-44 rounded-2xl bg-green-100 font-poppins '>
                                    <img className='ml-4 mt-6' alt='grafik' src={GrafikIc} />
                                    <h1 className=' ml-6 text-3xl font-medium text-black'>100</h1>
                                    <p className='ml-6 text-xl text-blue-500'>Pengguna Aktif</p>
                            </div>
                            <div className='w-64 h-44 rounded-2xl bg-green-100 font-poppins '>
                                    <img className='ml-4 mt-6' alt='grafik' src={GrafikIc} />
                                    <h1 className=' ml-6 text-3xl font-medium text-black'>67</h1>
                                    <p className='ml-6 text-xl text-blue-500'>Pengguna Tidak Aktif</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <div className="text-2xl font-poppins text-primary mt-5">
                            Member Laki-Laki
                        </div>
                        <div className='flex flex-row space-x-8'>
                            <div className='w-64 h-44 rounded-2xl bg-gray-100 font-poppins '>
                                    <img className='ml-4 mt-6' alt='grafik' src={GrafikIc} />
                                    <h1 className=' ml-6 text-3xl font-medium text-black'>167</h1>
                                    <p className='ml-6 text-xl text-blue-500'>Total Member</p>
                            </div>
                            <div className='w-64 h-44 rounded-2xl bg-gray-100 font-poppins '>
                                    <img className='ml-4 mt-6' alt='grafik' src={GrafikIc} />
                                    <h1 className=' ml-6 text-3xl font-medium text-black'>100</h1>
                                    <p className='ml-6 text-xl text-blue-500'>Pengguna Aktif</p>
                            </div>
                            <div className='w-64 h-44 rounded-2xl bg-gray-100 font-poppins '>
                                    <img className='ml-4 mt-6' alt='grafik' src={GrafikIc} />
                                    <h1 className=' ml-6 text-3xl font-medium text-black'>67</h1>
                                    <p className='ml-6 text-xl text-blue-500'>Pengguna Tidak Aktif</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <div className="text-2xl font-poppins text-primary mt-5">
                            Member Perempuan
                        </div>
                        <div className='flex flex-row space-x-8'>
                            <div className='w-64 h-44 rounded-2xl bg-gray-100 font-poppins '>
                                    <img className='ml-4 mt-6' alt='grafik' src={GrafikIc} />
                                    <h1 className=' ml-6 text-3xl font-medium text-black'>167</h1>
                                    <p className='ml-6 text-xl text-blue-500'>Total Member</p>
                            </div>
                            <div className='w-64 h-44 rounded-2xl bg-gray-100 font-poppins '>
                                    <img className='ml-4 mt-6' alt='grafik' src={GrafikIc} />
                                    <h1 className=' ml-6 text-3xl font-medium text-black'>100</h1>
                                    <p className='ml-6 text-xl text-blue-500'>Pengguna Aktif</p>
                            </div>
                            <div className='w-64 h-44 rounded-2xl bg-gray-100 font-poppins '>
                                    <img className='ml-4 mt-6' alt='grafik' src={GrafikIc} />
                                    <h1 className=' ml-6 text-3xl font-medium text-black'>67</h1>
                                    <p className='ml-6 text-xl text-blue-500'>Pengguna Tidak Aktif</p>
                            </div>
                        </div>
                    </div>
                </div>):(
                <div className="mt-2 flex flex-col">
                    <div className="flex mb-4 justify-between z-0">
                        <div className='flex flex-col'>
                            <div className="text-2xl font-poppins font-semibold text-primary mt-5">
                                Daftar Anggota
                            </div>
                            <div className="text-base font-poppins font-normal mb-3">
                                {banyak.resultHadir} Anggota Dimension
                            </div>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <button 
                            className="flex items-center w-36 rounded-xl pr-12 pl-6 bg-warnarow font-poppins text-primary font-normal text-base border-2 border-primary h-14 mt-5"
                            ref={btnDropdownRef}
                            onClick={handleClickFilter}>
                                <VscFilter className="text-2xl mr-3"/>
                                Filter
                            </button>
                        {dropdownPopoverShow && (
                        <div 
                        ref={popoverDropdownRef}
                        className="inline-block z-50 float-left list-none pt-2">
                            <div className='flex flex-col bg-white border-2 border-gray-200 w-64 rounded-md shadow-lg'>
                                <div className='py-4'>
                                    <div className='flex flex-row justify-between text-base font-poppins px-4'>
                                    <h1>Filters</h1>
                                    <h1 className='text-primary cursor-pointer' onClick={saveFilter}>Simpan</h1>
                                </div>
                                <div className='text-xs font-poppins space-y-2 mt-2'>
                                    <div className='px-4 text-left flex flex-row space-x-2'>
                                        {isOpen === false ? (
                                            <div className=' flex flex-row cursor-pointer'  onClick={handleOpenModal}>
                                                <AiOutlineRight className='w-6 h-4'/>
                                                <p>Status Anggota</p>
                                            </div>):(
                                            <div className=' flex flex-row cursor-pointer'  onClick={handleCloseModal}>
                                                <AiOutlineDown className='w-6 h-4'/>
                                                <p>Status Anggota</p>
                                            </div>
                                        )}
                                    </div>
                                    {kategori && (
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
                                    )}
                                </div>
                                <div className='text-xs font-poppins space-y-2 mt-2'>
                                    <div className='px-4 text-left flex flex-row space-x-2'>
                                        {isOpenJns === false ? (
                                            <div className=' flex flex-row cursor-pointer' onClick={handleOpenModalJns}>
                                                <AiOutlineRight className='w-6 h-4'/>
                                                <p>Jenis Kelamin</p>
                                            </div>):(
                                            <div  className=' flex flex-row cursor-pointer' onClick={handleCloseModalJns}>
                                                <AiOutlineDown className='w-6 h-4'/>
                                                <p>Jenis Kelamin</p>
                                            </div>
                                        )}
                                    </div>
                                    {kategoriJns && (
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
                                    )}
                                </div>
                                </div>
                            </div>
                        </div>
                        )}
                        </div>
                        <button onClick={handleClickAdd} className="flex items-center rounded-xl pr-12 pl-6 bg-warnarow font-poppins text-primary font-normal text-base border-2 border-primary h-14 mt-5">
                            <AiOutlinePlusCircle className="text-2xl mr-3" />
                            Tambah Anggota
                        </button>
                    </div>
                <ModalForm open={open} closeModal={setOpen} />

                <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 z-10">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden sm:rounded-lg">

                            <table
                                {...getTableProps()}
                                className="min-w-full table-fixed "
                            >
                                <thead className="bg-white">
                                    {headerGroups.map((headerGroup) => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map((column) => (
                                                <th
                                                    // scope="col"
                                                    className="px-6 py-3 text-left text-lg font-normal font-poppins tracking-wider"
                                                    {...column.getHeaderProps()}
                                                >
                                                    {column.render("Header")}
                                                    <div>{column.canFilter?column.render('Filter'):null}</div>
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody
                                    {...getTableBodyProps()}
                                    className="bg-warnarow"
                                >
                                    {page.map((row, i) => {
                                        // new
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map((cell) => {
                                                    return (
                                                        <td
                                                            {...cell.getCellProps({
                                                            })}
                                                            className={"px-6 py-4 border-white border-b-8 break-all " + cell.column.mystyle}
                                                        >
                                                            <p className={cell.column.className}>{cell.render("Cell")}</p>
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {pageCount <= 6 ? (<div className="flex justify-center mx-auto mb-11 z-0">
                    {/* //absolute inset-x-0 bottom-10 */}
                    {pageOptions.includes(indexs - 1) && (
                        <button
                            onClick={() => {
                                setIndex(indexs - 1);
                                previousPage();
                            }}
                            className="relative inline-flex items-center px-2 py-2 hover:text-primary rounded-l-md 0 bg-white text-lg font-medium text-#D6D6D6"
                        >
                            <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                    )}
                    {pageOptions.map((number, index) => (

                        <button
                            onClick={() => { gotoPage(number); setIndex(number) }}
                            className={number === indexs ? ("z-10 border-primary text-primary relative inline-flex items-center px-2 py-0 border rounded-lg text-lg font-medium font-poppins") : ("  text-#D6D6D6 relative inline-flex items-center px-3 py-0 text-lg font-medium font-poppins")}
                        >

                            {number + 1}
                        </button>
                    ))}
                    {pageOptions.includes(indexs + 1) && (
                        <button
                            onClick={() => {
                                setIndex(indexs + 1);
                                nextPage();
                            }}
                            className="relative inline-flex items-center px-2 py-2 hover:text-primary rounded-l-md 0 bg-white text-lg font-medium text-#D6D6D6"
                        >
                            <HiChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    )}
                </div>) : (<div className="flex justify-center mx-auto mb-11 z-0">
                    {/* //absolute inset-x-0 bottom-10 */}
                    {pageOptions.includes(indexs - 1) && (
                        <button
                            onClick={() => {
                                setIndex(indexs - 1);
                                previousPage();
                            }}
                            className="relative inline-flex items-center px-2 py-2 hover:text-primary rounded-l-md 0 bg-white text-lg font-medium text-#D6D6D6"
                        >
                            <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                    )}
                    {first !== 0 ? (<button
                        onClick={() => { gotoPage(0); setIndex(0) }}
                        className="text-#D6D6D6 relative inline-flex items-center px-3 py-0 text-lg font-medium"
                    >

                        1
                    </button>) : (<div></div>)}
                    {first !== 0 ? (<div className="text-#D6D6D6 relative inline-flex items-center px-3 py-0 text-lg font-medium font-poppins">
                        ...
                    </div>) : (<div></div>)}
                    {pageNumber.map((number, index) => (

                        <button
                            onClick={() => { gotoPage(number); setIndex(number) }}
                            className={number === indexs ? ("z-10 border-primary text-primary relative inline-flex items-center px-2 py-0 border rounded-lg text-lg font-medium font-poppins") : ("  text-#D6D6D6 relative inline-flex items-center px-3 py-0 text-lg font-medium font-poppins")}
                        >

                            {number + 1}
                        </button>
                    ))}
                    {last !== pageCount - 1 ? (<div className="text-#D6D6D6 relative inline-flex items-center px-3 py-0 text-lg font-medium font-poppins">
                        ...
                    </div>) : (<div></div>)}
                    {last !== pageCount - 1 ? (<button
                        onClick={() => { gotoPage(pageCount - 1); setIndex(pageCount - 1) }}
                        className="text-#D6D6D6 relative inline-flex items-center px-3 py-0 text-lg font-medium"
                    >

                        {pageCount}
                    </button>) : (<div></div>)}

                    {pageOptions.includes(indexs + 1) && (
                        <button
                            onClick={() => {
                                setIndex(indexs + 1);
                                nextPage();
                            }}
                            className="relative inline-flex items-center px-2 py-2 hover:text-primary rounded-l-md 0 bg-white text-lg font-medium text-#D6D6D6"
                        >
                            <HiChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    )}

                </div>)}
                </div>
            )}
        </div>    
    )
}

export default Table
