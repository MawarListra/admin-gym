import React,{useMemo} from "react";
import { useTable, useGlobalFilter, usePagination, useFilters } from "react-table";


import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { VscFilter } from "react-icons/vsc";
// import GlobalFilter from "./GlobalFilter";
import ModalForm from "./ModalForm";
import ModalFilter from "./ModalFilter";
import { ColumnFilter } from "./ColumnFilter";

function Table({ columns, data, banyak }) {
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
    const [openFilter, setOpenFilter] = React.useState(false)

    const handleClickFilter = () => {
        if(openFilter === true){
            setOpenFilter(false)
        }else{
            setOpenFilter(true)
        }
        console.log('clicked')
    }
    // const checkFilter = () => {
    //     // setOpenFilter(true)
    //     console.log('tempt')
    // }

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
        <div className="mt-2 flex flex-col">
            <div className="flex mb-4 justify-between">
                <div>
                    <div className="text-2xl font-poppins font-semibold text-primary mt-5">
                        Daftar Anggota
                    </div>
                    <div className="text-base font-poppins font-normal mb-3">
                        {banyak.resultHadir} Anggota Dimension
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <button onClick={handleClickFilter} className="flex items-center w-36 rounded-xl pr-12 pl-6 bg-warnarow font-poppins text-primary font-normal text-base border-2 border-primary h-14 mt-5">
                        <VscFilter className="text-2xl mr-3" />
                        Filter
                    </button>
                    <ModalFilter open={openFilter} closeModal={setOpenFilter} />
                    {/* {openFilter && (
                        <div className='flex flex-col bg-white border-2 border-gray-200 w-64 h-80 justify-bertween z-10'>
                            <div className='flex flex-row justify-between text-base font-poppins px-4 pt-4'>
                                <h1>Filters</h1>
                                <h1 className='text-primary'>Simpan</h1>
                            </div>
                            <div className='text-xs font-poppins space-y-2 mt-2'>
                                <div className='px-4'>
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
                                <div className='px-4'>
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
                    )} */}
                </div>
                <button onClick={() => setOpen(true)} className="flex items-center rounded-xl pr-12 pl-6 bg-warnarow font-poppins text-primary font-normal text-base border-2 border-primary h-14 mt-5">
                    <AiOutlinePlusCircle className="text-2xl mr-3" />
                    Tambah Anggota
                </button>
            </div>
            <ModalForm open={open} closeModal={setOpen} />

            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-4 lg:-mx-8">
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
                                                className="px-6 py-3 text-left text-sm font-normal font-poppins tracking-wider"
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
                                                        className={"px-6 py-4 border-white text-sm border-b-8 break-all " + cell.column.mystyle}
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
    )
}

export default Table
