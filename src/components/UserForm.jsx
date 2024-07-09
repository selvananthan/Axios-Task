import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Button, Form, Card } from 'react-bootstrap';

const UserForm = () => {
    const { addUser, updateUser, currentUser, setCurrentUser } = useContext(UserContext);
    const [user, setUser] = useState({ name: '', username: '', email: '' });

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        } else {
            setUser({ name: '', username: '', email: '' });
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentUser) {
            updateUser(user);
        } else {
            addUser(user);
        }
        setUser({ name: '', username: '', email: '' });
        setCurrentUser(null);
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>{currentUser ? 'Update User' : 'Add User'}</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="Value"
                            name="Phone"
                            value={user.phone}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        {currentUser ? 'Update User' : 'Add User'}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default UserForm;
