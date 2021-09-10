import React, { FC } from 'react';
import './App.scss';
import logo from './logo.svg';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'reactstrap';
import CustomCard from 'components/Card';
import Navbar from 'layouts/Navbar';

const App: FC = () => {
    return (
        <div className="App">
            <Navbar />
            <Container>
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>

                    <Col xs={6} md={4} lg={3}>
                        <CustomCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;
