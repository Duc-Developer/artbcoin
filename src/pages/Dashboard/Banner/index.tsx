import React from 'react';
import './style.scss';

function DashboardBanner() {
    return (
        <>
            <div className="main-banner">
                <h1>아트비, 문화예술에 가치를 더하다</h1>
                <p>NFT기반 예술 거래 플랫폼, ART BLOCKCHAUN PLATFORM</p>
                <div className="button-group">
                    <button>지갑</button>
                    <button>백서</button>
                    <button>전자도록</button>
                </div>
            </div>
            <div className="sub-banner">
                <div className="sub-banner__text">
                    <h3>남관 선생님의 ‘가을축제'</h3>
                    <p>Comming soon</p>
                </div>
                <div className="sub-banner__img"></div>
            </div>
        </>
    );
}

export default DashboardBanner;
