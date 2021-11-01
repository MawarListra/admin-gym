import React, { useState, useEffect} from 'react'
import Table from '../Components/Table/Table';
import * as BoxIcon from "react-icons/bi";
import axios from 'axios';
import ModalForm from '../Components/Table/ModalForm';

function DaftarAnggota() {
    const [tamu, setTamu] = useState([]);
    const [count,setCount] = useState([]);
    const [open, setOpen] = useState(false);
    function createData(id, nama, ttl, phone, jnskelamin, start, end, statusanggota) {
        return {id, nama, ttl, phone, jnskelamin, start, end, statusanggota};
    }
      
    const rows = [
    createData(1,'Mawar Listra', 'Perawang, 21 Mei 1998', '081289727869', 'Perempuan', '20 Oktober 2021', '20 Desember 2021', 'ACTIVE'),
    createData(1,'Mawar Listra', 'Perawang, 21 Mei 1998', '081289727869', 'Perempuan', '20 Oktober 2021', '20 Desember 2021', 'ACTIVE'),
    ];

    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }
        axios.get('https://api.wedding.chicodefive.com/v1/User/getall', config)
            .then(response => {
                setTamu(response.data.data);
                console.log(response.data.data);
                console.log(tamu)
            }).catch((err) => {
                console.log(err);
            })
            
        axios.get('https://api.wedding.chicodefive.com/v1/User/getallcounter', config)
            .then(response => {
                setCount(response.data);
                console.log(response.data);
            }).catch((err) => {
                console.log(err);
            })

    }, [tamu])

    const COLUMNS = React.useMemo(() => [
        // {
        //     Header: 'No',
        //     accessor: "",
        //     Cell: (row) => {
        //         return <div>{Number(row.row.id) + 1}</div>;
        //     },
        //     mystyle: "rounded-l-3xl max-w-kecil",
        //     disableFilters: true
        // },
        {
            Header: 'Nama',
            accessor: 'nama',
            mystyle: "max-w-sedang",
            disableFilters: true
        },
        {
            Header: 'Tempat, Tanggal Lahir',
            accessor: 'ttl',
            mystyle: "max-w-besar ",
            disableFilters: true
        },
        {
            Header: 'Nomor HP',
            accessor: 'phone',
            mystyle: "max-w-sedang",
            disableFilters: true
        },
        {
            Header: 'Jenis Kelamin',
            accessor: 'jnskelamin',
            mystyle: "max-w-sedang",
            disableFilters: true
        },
        {
            Header: 'Tanggal Mulai',
            accessor: 'start',
            mystyle: "max-w-sedang",
            disableFilters: true
        },
        {
            Header: 'Tanggal Selesai',
            accessor: 'end',
            mystyle: "max-w-sedang",
            disableFilters: true
        },
        {
            Header: 'Status Anggota',
            accessor: 'statusanggota',
            mystyle: "max-w-kecil",
            Cell: (data) => {
                return <div className={data.value === '0' ? "flex justify-center rounded-lg mx-auto py-2 px-6 font-poppins font-medium lg:text-sm text-xs border bg-abuabu" : "flex justify-center rounded-lg mx-auto py-2 px-6 font-poppins font-normal lg:text-sm text-xs border bg-hijaumuda"}>
                    {data.value !== '0' ? "ACTIVE" : "NOT ACTIVE"}
                </div>;
            },
            disableFilters: true
        },
        {
            mystyle: "rounded-r-3xl max-w-sedang",
            width: 20,
            Header: ' ',
            accessor: "id",
            Cell: (data) => {
                return <div className="flex space-x-10">
                    <button onClick={() => setOpen(true)} >
                        <BoxIcon.BiEdit className="text-warnaborder text-2xl items-center p-0" />
                    </button>
                    <ModalForm open={open} closeModal={setOpen} />
                </div>;
            },
            disableFilters: true
        },
    ],[open]
    );
    return (
    <div className="mx-10">
        <Table columns={COLUMNS} data={rows} banyak={count} />
    </div>
    )
}

export default DaftarAnggota
