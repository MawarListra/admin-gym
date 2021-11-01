import React from 'react'
import { useAsyncDebounce } from "react-table";
import {FiSearch} from "react-icons/fi";

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const [value, setValue] = React.useState(globalFilter)

    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)
    return (
        <span className="flex w-52 rounded-xl border-2 h-14 mt-7">
            <div className="flex items-center p-4 text-xl text-primary ">
            <FiSearch/>
            <input
                className="focus:outline-none font-poppins ml-2"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder="Search"
                type="search"
            />
            </div>
        </span>
    )
}

export default GlobalFilter
