import { ProxyState } from "../AppState.js"
import { Comment } from "../Models/Comment.js"
import { logger } from "../Utils/Logger.js"


class CommentsService {


  createComment(rawData) {
    const comment = new Comment(rawData)
    ProxyState.comments = [...ProxyState.comments, comment]
    logger.log('Comment Created')
    logger.log(ProxyState.comments)
  }
}

export const commentsService = new CommentsService()