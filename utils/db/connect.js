import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = (url) => {
  return mongoose.connect(url);
};

export const Start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('SuccessFully Connected');
  } catch (error) {
    console.log(error);
  }
};

export const convertDocToObj = (doc) => {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
};
