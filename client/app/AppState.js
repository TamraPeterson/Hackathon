import { dev } from './env.js'
import { Comment } from "./Models/Comment.js"
import { Post } from "./Models/Post.js"
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'



const practiceComment = new Comment(
  {
    id: 1,
    postId: 1,
    name: 'thisguy@something.com',
    body: 'I did it'
  }
)

const practiceComment2 = new Comment(
  {
    id: 2,
    postId: 3,
    name: 'thisotherguy@somethingelse.com',
    body: 'I did it again'
  }
)


class AppState extends EventEmitter {
  /** @type {import('./Models/Post').Post[]} */
  posts = []


  /** @type {import('./Models/Comment').Comment[]} */
  comments = []

  activePost = null


  user = {}
  account = {}
  /** @type {import('./Models/Value').Value[]} */
  values = []
  socketData = []


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.ProxyState = ProxyState
}
