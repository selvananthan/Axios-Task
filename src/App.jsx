import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { UserProvider } from './context/UserContext';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
    return (
        <UserProvider>
            <Container>
                <Row className="my-4">
                    <Col>
                        <h1>User Management</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <UserList />
                    </Col>
                    <Col md={4}>
                        <UserForm />
                    </Col>
                </Row>
            </Container>
        </UserProvider>
    );
};

export default App;
