import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData();


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email }
        console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
    }

    return (
        <div>
            <h3>Name: <small>{loadedUsers.name}</small></h3>
            <h3>Email <small>{loadedUsers.email}</small></h3>
            <br />
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email' />
                <br />
                <input type="submit" value="Update" />
            </form>


        </div>
    );
};

export default Update;