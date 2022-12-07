import React from 'react';
import styles from "../../styles/xfactor.module.css";
import Factor from './Factor';
import factor1Image from "../../images/factor1.png"
import factor2Image from "../../images/factor2.png"
import factor3Image from "../../images/factor3.png"
import factor4Image from "../../images/factor4.png"
import factor5Image from "../../images/factor5.png"
import { factor1, factor1Data, factor2, factor2Data, factor3, factor3Data, factor4, factor4Data, factor5, factor5Data } from '../../data/xFactorData';

const XFactor = () => {
    return (
        <div className={styles['x-factor']}>
            <h1 className={styles['x-factor-title']}>X-Factors Of<br />Programming Hero_</h1>
            <div className="container">
                <Factor style={factor1} img={factor1Image} factorData={factor1Data} />
                <Factor style={factor2} img={factor2Image} factorData={factor2Data} />
                <Factor style={factor3} img={factor3Image} factorData={factor3Data} />
                <Factor style={factor4} img={factor4Image} factorData={factor4Data} />
                <Factor style={factor5} img={factor5Image} factorData={factor5Data} />
            </div>
        </div>
    );
};

export default XFactor;