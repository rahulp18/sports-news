import React from 'react';
import MyCard from './MyCard';
import styles from '../styles/LatestNews.module.css';
import { Typography, CssBaseline } from '@mui/material';
const LatestNews = ({ news }) => {
  return (
    <div className={styles.container}>
      <CssBaseline />
      <Typography variant="h4" style={{ marginLeft: '15px' }} gutterBottom>
        Breaking News
      </Typography>
      <div className={styles.box}>
        {news.map((item) => (
          <MyCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
