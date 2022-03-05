import { Comment } from "../Models/Comment.js"

export function getCommentForm(comment = {}) {
  // @ts-ignore
  const commentData = new Comment(comment)
  return `
  <form class="row p-2" onsubmit="app.commentsController.handleSubmit('${commentData.id}')">
    <div class="mb-3 col-12">
        <label for="" class="form-label">New Comment</label>
        <input required type="text" class="form-control" name="comment" id="comment" aria-describedby="helpId"
            placeholder="Comment..." min="1" value="${commentData.body}">
    </div>
    <button class="col-4 offset-8 btn btn-success">Comment</button>
  </form>

<div id="post-comment"></div>
`
}



