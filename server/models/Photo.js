import { Schema } from "mongoose";

export const PhotoSchema = new Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  imgUrl: { type: String, required: true },
  like: { type: Number },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

PhotoSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})