import React from 'react';
import News from '../../models/news';
import Layout from '../../components/Layout';
import { convertDocToObj } from '../../utils/db/connect';
import { Container, Box, Typography, CssBaseline, Paper } from '@mui/material';
import { useStyles } from '../../components/styles';
import Image from 'next/image';
const PostDetails = ({ news }) => {
  const classes = useStyles();

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };

  return (
    <>
      <Layout
        title={news.title || 'News'}
        description="Hey You are in Rahul Web Page"
      >
        <CssBaseline />
        <Container className={classes.details_container}>
          <Box className={classes.imageBox}>
            <Image
              loader={myLoader}
              src={news.poster}
              alt={news.title}
              height={400}
              width={700}
            />
          </Box>
          <Paper className={classes.paper2}>
            <Typography variant="h4" className={classes.title}>
              {news.title}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ textAlign: 'right', color: 'grey' }}
            >
              Posted at: {new Date(news.createdAt).toDateString()}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {news.subTitle}
            </Typography>
            <Typography variant="body2">{news.details}</Typography>
          </Paper>
        </Container>
      </Layout>
    </>
  );
};

export default PostDetails;

export const getServerSideProps = async ({ params }) => {
  const { postId } = params;

  const news = await News.findById(postId).lean();

  return {
    props: {
      news: convertDocToObj(news),
    },
  };
};
