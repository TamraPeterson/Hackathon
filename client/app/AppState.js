import { dev } from './env.js'
import { Post } from "./Models/Post.js"
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'

const practicePost = new Post(
  {
    id: 1,
    name: 'Harrington',
    img: 'https://www.dtnpf.com/mydtn-public-core-portlet/servlet/GetStoredImage?category=CMS&symbolicName=q2421-hippiecows.jpg',
    body: 'Drop it like its hot'
  }
)
const practicePost2 = new Post(
  {
    id: 2,
    name: 'Mark',
    img: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    body: 'Oh Hi'
  }
)
const practicePost3 = new Post(
  {
    id: 3,
    name: 'Jeremy',
    img: 'https://artprojectsforkids.org/wp-content/uploads/2021/01/Cow.jpeg',
    body: 'I like salads'
  }
)
class AppState extends EventEmitter {
  /** @type {import('./Models/Post').Post[]} */
  posts = [practicePost, practicePost2, practicePost3]




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
