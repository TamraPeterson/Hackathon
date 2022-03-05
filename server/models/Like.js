import { Schema } from "mongoose";


export const LikeSchema = new Schema(
  {
    like: { type: Boolean, default: false },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    photoId: { type: Schema.Types.ObjectId, required: true, ref: 'Photo' }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

LikeSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})