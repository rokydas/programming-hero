import React from 'react';
import styles from '../../styles/projects.module.css'
import leaderboard from '../../images/leaderboard.jpg'
import shoppingCart from '../../images/shopping-cart.jpg'
import emaJohn from '../../images/ema-john.jpg'
import hotGadget from '../../images/hot-gadget.jpg'
import geniusCar from '../../images/genius-car.jpg'
import doctorsPortal from '../../images/doctors-portal.jpg'
import Image from 'next/image';

const projectData = [
    {
        projectTitle: "Ranking Board",
        thumbnail: leaderboard
    },
    {
        projectTitle: "Shopping Cart",
        thumbnail: shoppingCart
    },
    {
        projectTitle: "Hot Gadgets",
        thumbnail: hotGadget
    },
    {
        projectTitle: "Ema John",
        thumbnail: emaJohn
    },
    {
        projectTitle: "Genius Car",
        thumbnail: geniusCar
    },
    {
        projectTitle: "Doctor's Portal",
        thumbnail: doctorsPortal
    },
]

const Projects = () => {
    return (
        <div className={styles['project-section']}>
            <h1 className={styles['title']}>Projects You Will Build_</h1>
            <div className="container">
                <div className="row">
                    {
                        projectData.map(project => {
                            return (
                                <div className="col-md-6">
                                    <div className={`${styles['project-box']} p-3 rounded-3 mb-3 d-flex justify-content-between align-items-center`}>
                                        <h1 className={styles['project-title']}>{project.projectTitle}</h1>
                                        <Image className='rounded' src={leaderboard} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;