import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"


class CommentsService {
  async getAll(query = {}) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }

  async getById(id) {
    const comment = await dbContext.Comments.findById(id)
    if (!Comment) {
      throw new BadRequest('Invalid Comment Id')
    }
    return comment
  }


  async create(newComment) {
    const comment = await dbContext.Comments.create(newComment)
    return comment
  }
}

export const commentsService = new CommentsService()