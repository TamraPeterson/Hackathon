import { Auth0Provider } from "@bcwdev/auth0provider";
import { likesService } from "../services/LikesService";
import { photosService } from "../services/PhotosService";
import BaseController from "../utils/BaseController";


export class LikesController extends BaseController {
  constructor() {
    super('api/likes')
    this.router
      .get('', this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:id', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const likes = await likesService.getAll(req.query)
      return res.send(likes)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const like = await likesService.create(req.body)
      return res.send(like)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const like = await likesService.remove(req.params.id, req.userInfo.Id)
      return res.send(like)
    } catch (error) {
      next(error)
    }
  }

}