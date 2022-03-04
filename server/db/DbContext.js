import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { PhotoSchema } from '../models/Photo';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Photos = mongoose.model('Photo', PhotoSchema)
  Likes = mongoose.model('Like', LikeSchema)
  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
