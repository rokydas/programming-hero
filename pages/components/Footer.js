import React from 'react';
import styles from '../../styles/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p>Office Address</p>
                        <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        <p>Support: Web@Programming-Hero.Com</p>
                        <p>Helpline: 01322810867</p>
                        <p>(Available: 9:00am To 10:00pm)</p>
                    </div>
                    <div className="col-md-3">
                        <p>Useful links</p>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Success page</p>
                        <p>Terms And Condition</p>
                    </div>
                    <div className="col-md-3">
                        <p>Follow Us</p>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="d-flex justify-content-center">
                    <p>© Programming Hero 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;