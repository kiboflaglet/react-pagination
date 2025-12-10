import React from "react";
import { useGetUsersQuery } from "./usersAPI";

const UserRTKTable = () => {
  const [page, setPage] = React.useState(1);
  const limit = 5;

  const { data, isFetching } = useGetUsersQuery({ page, limit });

  if (isFetching && !data) {
    return <p>Loading...</p>;
  }
  if (!data) {
    // still nothing somehow
    return <p>No data.</p>;
  }

  const totalPages = Math.ceil(data.total / limit);

  return (
    <div>
      <h2>RTK Query Pagination</h2>

      <ul>
        {data.users.map((u: any) => (
          <li key={u.id}>
            {u.firstName} {u.lastName}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 10 }}>
        <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserRTKTable;
