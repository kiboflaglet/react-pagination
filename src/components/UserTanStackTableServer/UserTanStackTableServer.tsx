import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import React from 'react'
import { userColumns } from './user.columns'
import { useUserPagination } from './useUserPagination'

const UserTanStackTableServer = () => {

    const [page, setPage] = React.useState(0)
    const limit = 5;

    const { data, loading, total } = useUserPagination(page, limit)

    const pageCount = Math.ceil(total / limit)


    const table = useReactTable({
        data,
        pageCount,
        state: {
            pagination: { pageIndex: page, pageSize: limit }
        },
        manualPagination: true,
        onPaginationChange: (updater) => {
            const next = (typeof updater) === 'function'
                ? updater({ pageIndex: page, pageSize: limit }) : updater

            setPage(next.pageIndex)
        },
        columns: userColumns,
        getCoreRowModel: getCoreRowModel(),

    })


    return (
        <div>

            <h2>User list server side pagination</h2>
            {loading && <p>Loading...</p>}
            <table>
                <thead>

                    {table.getHeaderGroups().map(item => (
                        <tr key={item.id}>
                            {item.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}

                </thead>
                <tbody>

                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
            <div style={{
                display: 'flex',
                gap: "10px",
                alignItems: "center"
            }}>
                <button disabled={!table.getCanPreviousPage()} onClick={() => { table.previousPage() }}>Prev</button>
                <span>Curr: {table.getState().pagination.pageIndex + 1}</span>
                <button disabled={!table.getCanNextPage()} onClick={() => { table.nextPage() }}>Next</button>

            </div>



        </div>
    )
}

export default UserTanStackTableServer
