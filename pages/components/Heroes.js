import React from 'react';
import styles from '../../styles/heroes.module.css';

const Heroes = () => {
    return (
        <div className={`${styles['hero']} text-center`}>
            <h1>Heroes In Top Companies_</h1>
            <p>We can not guarantee you a job/intern. However, 70-80% of the students who finish our main<br />course and SCIC on time get a job or an internship within 3-6 months of their completion.</p>
        </div>
    );
};

export default Heroes;