import nc from 'next-connect';
import News from '../../models/news';
import User from '../../models/user';
import { Start } from '../../utils/db/connect';
import { data } from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  try {
    Start();
    await User.deleteMany();
    await User.insertMany(data.users);
    await News.deleteMany();
    await News.insertMany(data.news);

    res.send({ message: 'Seed Successfully' });
  } catch (error) {
    res.send({ error });
  }
});

export default handler;
