import React from "react"
import type { User } from "./users.type"

export const useUserPagination = (page: number, limit: number) => {
    const [data, setData] = React.useState<User[]>([])
    const [loading, setLoading] = React.useState(false)
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {
        const skip = page * limit;
        setLoading(true)
        fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                setData(res.users)
                setTotal(res.total)
            })
    }, [page, limit])

    return { data, loading, total }
}