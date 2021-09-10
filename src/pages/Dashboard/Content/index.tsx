import React, { useState } from 'react';
import CustomCard from 'components/Card';
import './style.scss';
import { Col, Row } from 'reactstrap';

const fakeDataShowmore = [1, 2, 3, 4, 5, 6, 7, 8];
function DashboardContent() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="dashboard-content">
            <div className="portfolio">
                <div className="portfolio__img">
                    <img src="#" alt="" />
                </div>
                <div className="portfolio__text">
                    <div className="text__box">
                        <h6>가을축제 작가명</h6>
                        <p>Name</p>
                    </div>
                    <div className="text__box">
                        <h6>작가설명</h6>
                        <p>
                            세부 작품명 소개자리입니다. 이달의 작가를 소개하고 작품을 안내합니다. 100자 이내로 작성하고 작품이 잘 드러날 수 있는
                            콘텐츠를 작성합니다.
                        </p>
                    </div>
                    <div className="text__box">
                        <h6>작가설명</h6>
                        <p>
                            세부 작품명 소개자리입니다. 이달의 작가를 소개하고 작품을 안내합니다. 100자 이내로 작성하고 작품이 잘 드러날 수 있는
                            콘텐츠를 작성합니다.
                        </p>
                    </div>
                </div>
            </div>
            <div className="list__image">
                <Row>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Col key={i.toString()} md="4" xs="6">
                            <CustomCard cardType="primary" />
                        </Col>
                    ))}
                </Row>
                <div className="showmore__btn">
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        작품 더보기
                    </button>
                </div>
                {isOpen && (
                    <Row style={{ marginTop: '50px' }}>
                        {fakeDataShowmore.map((i) => (
                            <Col key={i} md="3" xs="6">
                                <CustomCard cardType="secondary" />
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </div>
    );
}

export default DashboardContent;
