import Hero from '../components/Hero';
import LatestNews from '../components/LatestNews';
import Layout from '../components/Layout';

import News from '../models/news';
import { convertDocToObj, Start } from '../utils/db/connect';

export default function Home({ news }) {
  return (
    <>
      <Layout title="Home Page" description="Sports New Here">
        <Hero />
        <LatestNews news={news} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  Start();
  const news = await News.find({}).lean();

  return {
    props: {
      news: news.map(convertDocToObj),
    },
  };
};
