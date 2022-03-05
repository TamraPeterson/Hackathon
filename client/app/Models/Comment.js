export class Comment {
  constructor({ id, postId, name, body }) {
    this.id = id
    this.postId = postId
    this.name = name || ""
    this.body = body || ""
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
