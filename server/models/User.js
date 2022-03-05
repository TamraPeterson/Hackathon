import { Schema } from "mongoose";

export const UserSchema = new Schema({
  creatorId: { type: String, required: true, ref: 'Account' },
  photoId: { type: Schema.Types.ObjectId, required: true, ref: 'Photo' },
  likeId: { type: Schema.Types.ObjectId, required: true, ref: 'Like' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)
UserSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
