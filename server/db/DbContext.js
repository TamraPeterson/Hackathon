import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { PhotoSchema } from "../models/Photo";
import { ValueSchema } from '../models/Value'

class DbContext {
  Photos = mongoose.model('Photo', PhotoSchema)
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
