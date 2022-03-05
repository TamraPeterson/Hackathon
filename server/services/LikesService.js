import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class LikesService {
  async getAll(query = {}) {
    const likes = await dbContext.Likes.find(query)
    return likes
  }

  async getById(id) {
    const like = await dbContext.Likes.findById(id)
    if (!like) {
      throw new BadRequest('No likes here')
    }
    return like
  }

  async create(newLike) {
    const like = await dbContext.Likes.create(newLike)
    await like.populate('creator', 'name')
    return like
  }

  async remove(id, userId) {
    const original = await this.getById(id)
    if (original.creatorId.toString() !== userId) {
      throw new BadRequest('Not Allowed!')
    }
    await dbContext.Likes.findOneAndRemove({ _id: id })
  }


}

export const likesService = new LikesService()