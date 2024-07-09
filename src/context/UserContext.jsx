import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);

    const addUser = (user) => {
        axios.post('https://jsonplaceholder.typicode.com/users', user)
            .then(response => {
                setUsers([...users, response.data]);
            })
            .catch(error => {
                console.error("There was an error adding the user!", error);
            });
    };

    const updateUser = (user) => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
            .then(response => {
                setUsers(users.map(u => (u.id === user.id ? response.data : u)));
            })
            .catch(error => {
                console.error("There was an error updating the user!", error);
            });
    };

    const deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => {
                console.error("There was an error deleting the user!", error);
            });
    };

    return (
        <UserContext.Provider value={{ users, addUser, updateUser, deleteUser, currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
