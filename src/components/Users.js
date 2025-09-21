import React from 'react'
import useFetchData from '../hooks/useFetchData'

export default function Users() {
    const { data: users, loading, error } = useFetchData(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
