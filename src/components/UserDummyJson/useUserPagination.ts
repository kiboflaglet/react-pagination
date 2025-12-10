import { useEffect, useState } from "react"
import type { User } from "./User.type"



export const useUserPagination = (page: number, limit: number) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<User[]>([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const skip = (page - 1) * limit;
        setLoading(true)
        fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
            .then(res => res.json())
            .then(res => {
                setTotal(res.total)
                setData(res.users)
                setLoading(false)
            })
    }, [page, limit])

    return { data, loading, total }
}

