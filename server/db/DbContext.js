import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment";
import { PhotoSchema } from "../models/Photo";
import { ValueSchema } from '../models/Value'

class DbContext {
  Photos = mongoose.model('Photo', PhotoSchema)

  Comments = mongoose.model('Comment', CommentSchema)

  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');

}

export const dbContext = new DbContext()
