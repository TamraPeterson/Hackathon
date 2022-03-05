import { ProxyState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { logger } from "../Utils/Logger.js"
import { api, cowApi } from "./AxiosService.js"

class PostsService {

    async getPosts() {
        try {
            let res = await cowApi.get('photos')
            console.log(res.data);
            ProxyState.posts = res.data.map(p => new Post(p))
        } catch (error) {
            console.error(error)
        }
    }
    async createPost(rawData) {
        const res = await api.post('api/photos', rawData)
        console.log(res.data);
        const post = new Post(res.data)
        ProxyState.posts = [...ProxyState.posts, post]
        logger.log('Post Created')
    }

    deletePost(id) {
        ProxyState.posts = ProxyState.posts.filter(p => p.id != id)
        ProxyState.comments = ProxyState.comments.filter(c => c.postId != id)
    }
}

export const postsService = new PostsService()