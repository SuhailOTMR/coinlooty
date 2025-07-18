import React from 'react';
import styles from './style.module.css';
const images=[
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png'
]

const Scroller = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {images.concat(images).map((src, index) => (
                    <div
                        key={index}
                        className={styles.item}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Scroller;
