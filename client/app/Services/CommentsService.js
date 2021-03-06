import { ProxyState } from "../AppState.js"
import { Comment } from "../Models/Comment.js"
import { logger } from "../Utils/Logger.js"
import { api, cowApi } from "./AxiosService.js"


class CommentsService {
  setActivePost(id) {
    ProxyState.activePost = ProxyState.posts.find(p => p.id == id)
  }

  async getComments() {
    try {
      let res = await cowApi.get('comments')
      console.log(res.data);
      ProxyState.comments = res.data.map(c => new Comment(c))
    } catch (error) {
      console.error(error)
    }
  }

  async createComment(rawData) {
    const res = await api.post('api/comments', rawData)
    console.log(res.data);
    const comment = new Comment(res.data)
    ProxyState.comments = [...ProxyState.comments, comment]
    logger.log('Comment Created')
    logger.log(ProxyState.comments)
  }
}

export const commentsService = new CommentsService()