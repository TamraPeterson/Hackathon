export class Post {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.image
    this.body = data.body
  }

  get Template() {
    return `      
    <div class="col-12 col-md-4 p-3">

    <div class="row ">
      <div class="col-12 text-center shadow bg-light p-3 ">
        <h5 class="p-2">${this.name}</h5>
        <img
          src=${this.img}
          alt="cow" class="img-fluid post-image">
        <div>
          <h5 class="p-2">${this.body}</h5>
        </div>
        <button class="btn btn-info text-light" onclick="">Like</button>
        <button type="button" class="btn btn-primary text-light" data-bs-toggle="modal" data-bs-target="#new-comment"
        id="create-comment" onclick="app.commentsController.setActivePost('${this.id}')">Comment</button>
        <button class="btn btn-outline-danger" onclick="app.postsController.deletePost('${this.id}')">Delete</button>
      </div>
    </div>

  </div>`
  }

}