import { ProxyState } from "../AppState.js";
import { getCommentForm } from "../Components/CommentForm.js";
import { commentsService } from "../Services/CommentsService.js";
import { logger } from "../Utils/Logger.js";




function _drawComments(id) {
  console.log('_drawComments Id', id);
  document.getElementById('modal-comment-slot').innerHTML = getCommentForm()

  let filteredComments = ProxyState.comments.filter(c => c.postId == id)

  let template = ''
  filteredComments.forEach(c => template += c.Template)
  document.getElementById('post-comment').innerHTML = template
}

export class CommentsController {
  constructor() {
    ProxyState.on('comments', _drawComments)
  }

  drawComments(id) {
    _drawComments(id)
  }

  async handleSubmit(id) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      const rawData = {
        name: ProxyState.user.name,
        // @ts-ignore
        body: form.comment.value
      }
      commentsService.createComment(rawData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log(error)
    }
  }
}