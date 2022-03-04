import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"



class PhotosService {
    async find(query = {}) {
        const photos = await dbContext.Photos.find(query)
        return photos
    }

    async findById(Id) {
        const photo = await dbContext.Photos.findById(id)
        if (!Photo) {
            throw new BadRequest('Invalid Id')
        }
        return photo
    }
}

export const photosService = new PhotosService()