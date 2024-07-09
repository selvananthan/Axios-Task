import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Button, Card, Row, Col } from 'react-bootstrap';

const UserList = () => {
    const { users, deleteUser, setCurrentUser } = useContext(UserContext);

    return (
        <Row>
            {users.map(user => (
                <Col md={4} key={user.id} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
                            <Card.Text>
                                Email: {user.email}
                            </Card.Text>
                            <Card.Text>
                                Phone: {user.phone}
                            </Card.Text>
                            <Button variant="info" onClick={() => setCurrentUser(user)}>Edit</Button>
                            <Button variant="danger" onClick={() => deleteUser(user.id)} className="ml-2">Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default UserList;
