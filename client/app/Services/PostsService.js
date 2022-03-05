import { ProxyState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { logger } from "../Utils/Logger.js"

class PostsService {


    createPost(rawData) {
        const post = new Post(rawData)
        ProxyState.posts = [...ProxyState.posts, post]
        logger.log('Post Created')
    }

    deletePost(id) {
        ProxyState.posts = ProxyState.posts.filter(p => p.id != id)
        ProxyState.comments = ProxyState.comments.filter(c => c.postId != id)
    }
}

export const postsService = new PostsService()