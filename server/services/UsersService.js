import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class UsersService {
  async getAll(query) {
    const users = await dbContext.Users.find(query)
    return users
  }

  async getById(id) {
    const user = await dbContext.Users.findById(id)
    if (!user) {
      throw new BadRequest('Invalid User')
    }
    return user
  }

  async create(newUser) {
    const user = await dbContext.Users.create(newUser)
    await user.populate('creator')
    return user
  }

}

export const usersService = new UsersService()