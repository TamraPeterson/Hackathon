import { Schema } from "mongoose";


export const CommentSchema = new Schema({
  body: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true },
  photoId: { type: Schema.Types.ObjectId, required: true, ref: 'Photo' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('photo', {
  localField: 'photoId',
  foreignField: '_id',
  ref: 'Photo',
  justOne: true
})