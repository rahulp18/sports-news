import nc from 'next-connect';

import News from '../../../models/news';

const handler = nc();

handler.get(async (req, res) => {
  const news = await News.find({});

  res.send(news);
});

export default handler;
