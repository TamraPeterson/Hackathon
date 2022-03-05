import { ProxyState } from "../AppState.js"
import { getPostForm } from "../Components/PostForm.js"
import { AuthService } from "../Services/AuthService.js"
import { postsService } from "../Services/PostsService.js"
import { logger } from "../Utils/Logger.js"
import { Pop } from "../Utils/Pop.js"

function _drawPosts() {
  let template = ''
  console.log(ProxyState.posts);
  ProxyState.posts.forEach(p => template += p.Template)
  document.getElementById('posts').innerHTML = template

  document.getElementById('modal-body-slot').innerHTML = getPostForm()
}



export class PostsController {
  constructor() {
    ProxyState.on('posts', _drawPosts)
    _drawPosts()
    postsService.getPosts()
  }

  async handleSubmit(id) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      const rawData = {
        imgUrl: form.img.value,
        body: form.body.value,
        name: ProxyState.user.name
      }

      postsService.createPost(rawData)
      let modal = document.getElementById('new-post')
      //@ts-ignore
      form.reset()
      bootstrap.Modal.getOrCreateInstance(modal).hide()
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(id) {
    if (await window.confirm()) {
      postsService.deletePost(id)
    }
  }

}