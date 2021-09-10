import React from 'react';
import './style.scss';

export type CardType = 'primary' | 'secondary';

const CustomCard = ({ cardType }: { cardType: CardType }) => {
    switch (cardType) {
        case 'primary':
            return (
                <div className="card__wrapper primary">
                    <div className="card__image"></div>
                    <div className="card__content">
                        <h6>컬렉션 작품</h6>
                        <h5>작품명 소개</h5>
                        <p>작품명 소개자리입니다.</p>
                    </div>
                </div>
            );
        case 'secondary':
            return (
                <div className="card__wrapper secondary">
                    <div className="card__image"></div>
                    <div className="card__content">
                        <h5>작품명 소개</h5>
                        <p>작품명 소개자리입니다.</p>
                    </div>
                </div>
            );
        default:
            return <></>;
    }
};

export default CustomCard;
