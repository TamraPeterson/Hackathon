import { dbContext } from "../db/DbContext"

class UsersService {
  async getAll(query) {
    const users = await dbContext
  }

}

export const usersService = new UsersService()