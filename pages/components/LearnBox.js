import Image from 'next/image';
import React from 'react';
import styles from '../../styles/learnbox.module.css';

const LearnBox = ( {name, img} ) => {
    return (
        <div className="col-md-6">
            <div className="d-flex justify-content-center">
                <div>
                    <h6 className={styles['title']}>{name}</h6>
                    <Image src={img} width="70" height="70" />
                </div>
            </div>
        </div>
    );
};

export default LearnBox;