import React from 'react';
import styles from '../../styles/impact.module.css';

const Impact = () => {
    return (
        <div className={`${styles['impact']}`}>
            <div className='container d-flex align-items-end flex-column'>
                <p>Largest <br /> Community</p>
                <h1 className={styles['our_impact']}>Our <br /> Impact_</h1>
                
                <div className={`${styles['impact-card']} d-flex text-white text-start rounded-3`}>
                    <div className={styles['impact-box']}>
                        <h1>2000+</h1>
                        <p>Job placement<br />worldwide</p>
                    </div>
                    <div className={styles['impact-box']}>
                        <h1>1200+</h1>
                        <p>Connected<br />companies</p>
                    </div>
                    <div className={styles['impact-box']}>
                        <h1>17+</h1>
                        <p>Dedicated Job<br />Placement Executives</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impact;