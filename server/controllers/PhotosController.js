import { Auth0Provider } from "@bcwdev/auth0provider";
import { query } from "express";
import { likesService } from "../services/LikesService";
import { photosService } from "../services/PhotosService";
import BaseController from "../utils/BaseController";

export class PhotosController extends BaseController {
  constructor() {
    super('api/photos')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.like)
      .delete('/:id', this.remove)
  }
  async getById(req, res, next) {
    try {
      const photo = await photosService.getById(req.params.id)
      return res.send(photo)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      const photos = await photosService.getAll(req.query)
      return res.send(photos)
    } catch (error) {
      next(error)
    }
  }
  async getPhotoLikes(req, res, next) {
    try {
      const likes = await likesService.getAll({ photoId: req.params.id })
      return res.send(likes)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const photo = await photosService.create(req.body)
      res.send(photo)
    } catch (error) {
      next(error)
    }
  }
  async like(req, res, next) {
    try {
      const message = await photosService.like(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      const photo = await photosService.remove(req.params.id, req.userInfo.id)
      return res.send('Post removed')
    } catch (error) {
      next(error)
    }
  }
}