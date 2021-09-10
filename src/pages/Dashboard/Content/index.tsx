import React from 'react';
import './style.scss';

function DashboardContent() {
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
            {/* images */}
        </div>
    );
}

export default DashboardContent;
