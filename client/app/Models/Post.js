export class Post {
  constructor({ name, img, body }) {
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
          alt="cow" class="img-fluid">
        <div>
          <h5>${this.body}</h5>
        </div>
        <button class="btn btn-info" onclick="">Like</button>
        <button class="btn btn-primary" onclick="">Comment</button>
      </div>
    </div>

  </div>`
  }
}