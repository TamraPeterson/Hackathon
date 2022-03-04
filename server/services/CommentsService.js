import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"


class CommentsService {
  async getAll(query = {}) {
    const comments = await dbContext.Comments.find(query).populate('creator', 'name')
    return comments
  }

  async getById(id) {
    const comment = await dbContext.Comments.findById(id).populate('creator', 'name')
    if (!comment) {
      throw new BadRequest('Invalid Comment Id')
    }
    return comment
  }


  async create(newComment) {
    const comment = await dbContext.Comments.create(newComment)
    return comment
  }
  async remove(id, userId) {
    const original = await this.getById(id)
    if (original.creatorId.toString() !== userId) {
      throw new BadRequest('Can\'t delete a comment you didn\'t make!')
    }
    await dbContext.Comments.findOneAndRemove({ _id: id })
  }
}
export const commentsService = new CommentsService()