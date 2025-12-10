import React from 'react'
import type { User } from './User.type'
import { useUserPagination } from './useUserPagination';

const UserDummyAPI = () => {

    const pageSize = 5;
    const [page, setPage] = React.useState(1)

    const { data, loading, total } = useUserPagination(page, pageSize)


    const movePage = (increase: boolean) => {
        increase ? setPage(page => page + 1) : setPage(page => page - 1)
    }


    const totalPages = Math.ceil(total / pageSize);

    return (
        <div>

            <h2>Users Dummy API</h2>

            {loading ? (
                <h3>Users loading</h3>
            ) : (
                <ul>
                    {data.map((item: User) => (
                        <li key={item.id}>{item.firstName} {item.lastName}</li>
                    ))}
                </ul>
            )}


            <div style={{
                display: 'flex',
                gap: "10px",
                alignItems: "center"
            }}>
                <button disabled={page <= 1} onClick={() => { movePage(false) }}>Prev</button>
                <span>Curr: {page}, Page size: {pageSize}, Total pages: {totalPages}</span>
                <button disabled={page >= totalPages} onClick={() => { movePage(true) }}>Next</button>
            </div>

        </div>
    )
}

export default UserDummyAPI
