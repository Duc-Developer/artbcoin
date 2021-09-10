import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CustomCard from 'components/Card';

const DashBoard: React.FC = () => {
    return (
        <div>
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

export default DashBoard;
