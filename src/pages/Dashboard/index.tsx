import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CustomCard from 'components/Card';
import DashboardBanner from './Banner';
import DashboardContent from './Content';

const DashBoard: React.FC = () => {
    return (
        <div>
            <Container fluid="100%">
                <DashboardBanner />
                <DashboardContent />
                {/* //footer */}
            </Container>
        </div>
    );
};

export default DashBoard;
