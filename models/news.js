import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    poster: { type: String, required: true },
    details: { type: String, required: true },
    comments: { type: [] },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.models.News || mongoose.model('News', newsSchema);

export default News;
