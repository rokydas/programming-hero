import Image from 'next/image';
import React from 'react';

const Factor = ({ style, img, factorData }) => {

    const {cornerTitle, title, description} = factorData || {}

    return (
        <div className={`rounded-4`} style={style}>
            <div className="row">
                <div className="col-md-8 p-5">
                    <p>{cornerTitle}</p>
                    <h1>{title}</h1>
                    <h4>{description}</h4>
                </div>
                <div className="col-md-4 p-5 bg-white rounded-end d-flex justify-content-center align-items-center">
                    <Image src={img} width="150" height="150" />
                </div>
            </div>
        </div>
    );
};

export default Factor;