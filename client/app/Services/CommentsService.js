import { ProxyState } from "../AppState.js"
import { Comment } from "../Models/Comment.js"
import { logger } from "../Utils/Logger.js"
import { cowApi } from "./AxiosService.js"


class CommentsService {
  setActivePost(id) {
    ProxyState.activePost = ProxyState.posts.find(p => p.id == id)
  }

  async getComments() {
    try {
      let res = await cowApi.get('comments')
      console.log(res.data);
      ProxyState.comments = res.data.body
    } catch (error) {
      console.error(error)
    }
  }

  createComment(rawData) {
    const comment = new Comment(rawData)
    ProxyState.comments = [...ProxyState.comments, comment]
    logger.log('Comment Created')
    logger.log(ProxyState.comments)
  }
}

export const commentsService = new CommentsService()