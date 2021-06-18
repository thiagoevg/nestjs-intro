import * as mongoose from 'mongoose';

// The Schema is important to give to the mongoDB a certain patern, avoiding unncessary bugs and mistakes.
export const CoursesSchema = new mongoose.Schema({
  seqNo: Number,
  url: String,
  iconUrl: String,
  courseListIcon: String,
  description: String,
  longDescription: String,
  category: String,
  lessonsCount: Number,
  promo: Boolean,
});
