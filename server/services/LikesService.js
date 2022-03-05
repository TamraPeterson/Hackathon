import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class LikesService {
  async getLikesByPhotoId(photoId) {
    const likes = await dbContext.Likes.find({ photoId: photoId })
    return likes
  }
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

  async create(body) {
    const like = await dbContext.Likes.create(body)
    await like.populate('creator', 'name')
    return like
  }
  async like(id) {
    const original = await dbContext.Photos.findById(id)
    original.like = !original.like
    await original.save()
    return original.like ? 'Like added' : 'Like removed'
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