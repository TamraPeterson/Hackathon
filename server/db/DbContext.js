import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment";
import { LikeSchema } from "../models/Like";
import { PhotoSchema } from "../models/Photo";
import { UserSchema } from "../models/User";
import { ValueSchema } from '../models/Value'

class DbContext {
  Photos = mongoose.model('Photo', PhotoSchema)
  Comments = mongoose.model('Comment', CommentSchema)
  Likes = mongoose.model('Like', LikeSchema)
  Users = mongoose.model('User', UserSchema)

  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');


}

export const dbContext = new DbContext()
