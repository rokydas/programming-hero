import Image from 'next/image';
import React from 'react';
import styles from '../../styles/learn.module.css'
import learnLogo from '../../images/learn_logo.png'
import js from '../../images/js.png'
import tailwind from '../../images/tailwind.png'
import firebase from '../../images/firebase.png'
import mongodb from '../../images/mongodb.png'
import html from '../../images/html.png'
import node from '../../images/node.png'
import react from '../../images/react.png'
import css from '../../images/css.png'
import LearnBox from './LearnBox';

const Learn = () => {
    return (
        <div className={`${styles['learn']} text-center text-white`}>
            <div className={styles["learn-content"]}>
                <h1>What will your learn?_</h1>
                <p>The web course consists of 80+ modules, 25+ course projects, 15+ practice projects and 12 assignments</p>
                <Image src={learnLogo} width="100" height="100" />

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="row">
                            <LearnBox name="JAVASCRIPT" img={js} />
                            <LearnBox name="TAILWIND" img={tailwind} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <LearnBox name="FIREBASE" img={firebase} />
                            <LearnBox name="MONGODB" img={mongodb} />
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="row">
                            <LearnBox name="HTML" img={html} />
                            <LearnBox name="NODE" img={node} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <LearnBox name="REACT" img={react} />
                            <LearnBox name="CSS" img={css} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learn;