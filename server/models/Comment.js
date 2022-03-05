import { Schema } from "mongoose";


export const CommentSchema = new Schema({
  body: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  photoId: { type: Schema.Types.ObjectId, required: true, ref: 'Photo' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})