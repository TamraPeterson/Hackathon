import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PhotosService {
  async getAll(query = {}) {
    const photos = await dbContext.Photos.find(query)
    return photos
  }
  async getById(id) {
    const photo = await dbContext.Photos.findById(id)
    if (!photo) {
      throw new BadRequest('That photo does not exist')
    }
    return photo
  }
  async create(body) {
    const photo = await dbContext.Photos.create(body)
    return photo
  }

}

export const photosService = new PhotosService()