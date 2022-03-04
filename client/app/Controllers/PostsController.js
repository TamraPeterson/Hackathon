import { ProxyState } from "../AppState.js"

function _draw() {
  let template = ''
  ProxyState.posts.forEach(p => template += p.Template)
  document.getElementById('posts').innerHTML = template
}



export class PostsController {
  constructor() {
    _draw()
  }


}