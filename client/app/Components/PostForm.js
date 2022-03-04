import { Post } from "../Models/Post.js"

export function getPostForm(post = {}) {
    // @ts-ignore
    const postData = new Post(post)
    return `
    <form class="row p-2" onsubmit="app.postsController.handleSubmit('${postData.id}')">
        <h3 class="col-12">New Post</h3>
        <div class="mb-3 col-4">
            <label for="" class="form-label">Description</label>
            <input required type="text" class="form-control" name="body" id="body" aria-describedby="helpId"
                placeholder="Description..." min="1" value="${postData.body}">
        </div>
        <div class="mb-3 col-4">
            <label for="" class="form-label">Image Url</label>
            <input required type="text" class="form-control" name="img" id="img" aria-describedby="helpId"
                placeholder="imgUrl" min="1" value="${postData.img}">
        </div>
        <button class="col-4 offset-8 btn btn-success">Create</button>
    </form>`
}