import { Search } from '@mui/icons-material';
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useMemo } from 'react';

const Table = ({ columns, rows, isFetching, error, rowsPerPage }) => {
    const [searchValue, setSearchValue] = useState('');

    const filteredRows = useMemo(() => {
        if (!searchValue) return rows;
        return rows.filter(row =>
            Object.values(row).some(value =>
                typeof value === 'string' &&
                value.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    }, [rows, searchValue]);

    return (
        <div className="w-full h-auto overflow-x-scroll px-4 py-2 bg-[#f9fafb] rounded-md shadow-sm">

            {/* Loading */}
            {isFetching && (
                <div className="w-full h-[11rem] flex justify-center items-center bg-white rounded-md shadow-sm">
                    <CircularProgress size={30} />
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="w-full h-[11rem] flex justify-center items-center bg-white rounded-md shadow-sm">
                    <span className="text-red-600 text-[16px] font-medium">{error}</span>
                </div>
            )}

            {/* Data Grid */}
            {!isFetching && !error && (
                <DataGrid
                    className="bg-white rounded-md shadow-md p-[10px]"
                    rows={filteredRows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: rowsPerPage },
                        },
                    }}
                    getRowId={(row) => row._id || row.id}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            )}
        </div>
    );
};

export default Table;
