export class Post {
  constructor({ id, name, img, body }) {
    this.id = id
    this.name = name
    this.img = img
    this.body = body
  }

  get Template() {
    return `      
    <div class="col-12 col-md-4 p-3">

    <div class="row ">
      <div class="col-12 text-center shadow bg-light p-3 ">
        <h5>@${this.name}</h5>
        <img
          src=${this.img}
          alt="cow" class="img-fluid post-image">
        <div>
          <h5>${this.body}</h5>
        </div>
        <button class="btn btn-info" onclick="">Like</button>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#new-comment"
        id="create-comment" onclick="app.commentsController.drawComments('${this.id}')">Comment</button>
      </div>
    </div>

  </div>`
  }


}