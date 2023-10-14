import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    return (
        <div>
            <h2 className="">Users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                         {
                            loadedUsers.map(user => <tr key={user._id}>
                                <th>1</th>
                                <th>{user.email}</th>
                                <th>{user.createdAt}</th>
                                <th>Blue</th>
                            </tr>)
                         }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Users;