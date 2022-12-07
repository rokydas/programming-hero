import Image from 'next/image';
import React from 'react';
import styles from '../../styles/learn.module.css'
import learnLogo from '../../images/learn_logo.png'

const Learn = () => {
    return (
        <div className={`${styles['learn']} text-center text-white`}>
            <h1>What will your learn?_</h1>
            <p>The web course consists of 80+ modules, 25+ course projects, 15+ practice projects and 12 assignments</p>
            <Image src={learnLogo} width="100" height="100" />
        </div>
    );
};

export default Learn;