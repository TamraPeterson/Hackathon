import { ProxyState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { logger } from "../Utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {

    // async getPosts() {
    //     try {
    //         let res = await cowApi.get('photos')
    //         console.log(res.data);
    //         // ProxyState.posts = new Post(res.data)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
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