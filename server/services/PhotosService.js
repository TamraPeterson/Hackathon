import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PhotosService {
  async getAll(query = {}) {
    const photos = await dbContext.Photos.find(query).populate('creator', 'name')
    return photos
  }
  async getById(id) {
    const photo = await dbContext.Photos.findById(id).populate('creator', 'name')
    if (!photo) {
      throw new BadRequest('That photo does not exist')
    }
    return photo
  }
  async create(body) {
    const photo = await dbContext.Photos.create(body)
    return photo
  }

  async remove(id, userId) {
    const original = await this.getById(id)
    if (original.creatorId.toString() !== userId) {
      throw new BadRequest('Not your post!')
    }
    await dbContext.Photos.findOneAndRemove({ _id: id })
  }
}

export const photosService = new PhotosService()