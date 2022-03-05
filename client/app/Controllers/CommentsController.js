import { ProxyState } from "../AppState.js";
import { getCommentForm } from "../Components/CommentForm.js";
import { commentsService } from "../Services/CommentsService.js";
import { logger } from "../Utils/Logger.js";




function _drawComments() {
  document.getElementById('modal-comment-slot').innerHTML = getCommentForm()
  let filteredComments = ProxyState.comments.filter(c => c.postId == ProxyState.activePost.id)

  let template = ''
  filteredComments.forEach(c => template += c.Template)
  document.getElementById('post-comment').innerHTML = template
}

export class CommentsController {
  constructor() {
    ProxyState.on('activePost', _drawComments)
    ProxyState.on('comments', _drawComments)
    // commentsService.getComments()
  }

  setActivePost(id) {
    commentsService.setActivePost(id)
  }

  async handleSubmit(id) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      const rawData = {
        name: ProxyState.user.name,
        // @ts-ignore
        body: form.comment.value,
        postId: ProxyState.activePost.id
      }
      commentsService.createComment(rawData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log(error)
    }
  }
}