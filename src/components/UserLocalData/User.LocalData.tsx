import React from 'react'
import users from "./users.data.json"
import type { User } from './User.type'

const UserLocalData = () => {

    const pageSize = 5;
    const [page, setPage] = React.useState(1)
    const start = (page - 1) * pageSize
    const end = start + pageSize

    const paginatedUsers = users.slice(start, end)
    const totalPages = Math.ceil(users.length / pageSize)

    const movePage = (increase: boolean) => {
        increase ? setPage(page => page + 1) : setPage(page => page - 1)
    }

    return (
        <div>

            <h2>Users Local Data</h2>

            <ul>
                {paginatedUsers.map((item: User) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            <div style={{
                display: 'flex',
                gap: "10px",
                alignItems: "center"
            }}>
                <button disabled={page <= 1}  onClick={() => { movePage(false) }}>Prev</button>
                <span>Curr: {page}, Page size: {pageSize}, Total pages: {totalPages}</span>
                <button disabled={page >= totalPages} onClick={() => { movePage(true) }}>Next</button>
            </div>

        </div>
    )
}

export default UserLocalData
