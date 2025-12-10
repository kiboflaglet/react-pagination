import { createColumnHelper } from "@tanstack/react-table";
import type { User } from "./users.type";

const column = createColumnHelper<User>()

export const userColumns = [
    column.accessor("id", {
        "header": "ID"
    }),
    column.accessor(row => `${row.firstName} ${row.lastName} `, {
        id: 'full name', 
        header: "Full Name"
    })
]