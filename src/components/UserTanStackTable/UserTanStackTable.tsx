import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { userColumns } from './user.columns'
import users from './users.data.json'

const UserTanStackTable = () => {


    const table = useReactTable({
        data: users,
        columns: userColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })


    return (
        <div>

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
                <button disabled={!table.getCanPreviousPage()} onClick={ () => {table.previousPage()}}>Prev</button>
                <span>Curr: {table.getState().pagination.pageIndex + 1}</span>
                <button disabled={!table.getCanNextPage()} onClick={ () => {table.nextPage()}}>Next</button>

            </div>



        </div>
    )
}

export default UserTanStackTable
