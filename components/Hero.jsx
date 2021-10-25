import React from 'react';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import image from '../Images/news.jpg';

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.images}>
        <Image src={image} alt="indian players" />
      </div>
      <div className={styles.image_overly}>
        <h1 className={styles.h1}>
          <span>I</span>M<span>RAHUL PRADHAN</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
