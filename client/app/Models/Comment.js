export class Comment {
  constructor(data) {
    this.id = data.id
    this.postId = data.photoId
    this.name = data.name || ""
    this.body = data.body || ""
  }

  get Template() {
    return `
    <div class="col-12">
    <h6>${this.name}</h6>
    <h4>${this.body}</h4>
    </div>
    `
  }
}
