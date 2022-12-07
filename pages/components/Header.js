import React from 'react';
import logo from '../../images/ph_logo.png'
import Image from 'next/image'
import styles from '../../styles/header.module.css';

const Header = () => {
    return (
        <div className={`${styles['header']}`}>
            <div className="container">
                <div className='row h-100'>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Image src={logo} alt="me" width="500" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <h1>Let's code <br /> your career_</h1>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;