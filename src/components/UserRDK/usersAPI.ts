import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ({ page, limit }) => {
                const skip = (page - 1) * limit;
                return `users?limit=${limit}&skip=${skip}`;
            }
        })
    })
});

export const { useGetUsersQuery } = usersApi
