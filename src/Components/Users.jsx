import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        // make sure user is confirmed to delete 
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                console.log('deleted successfully');
                // remove the user from the ui
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
            }
        })
    }
    return (
        <div>
            <h2 className="">Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Last Logged In</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                         {
                            users.map((user,index) => <tr key={user._id}>
                                <th>{index+1}</th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.createdAt}</th>
                                <th>
                                    <button 
                                    onClick={()=> handleDelete(user._id)}
                                   className="btn bg-orange-600" >X</button>
                                </th>
                            </tr>)
                         }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Users;