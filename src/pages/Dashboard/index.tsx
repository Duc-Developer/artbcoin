import React from 'react';
import { Container } from 'reactstrap';
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
