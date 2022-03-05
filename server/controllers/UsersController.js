import { usersService } from "../services/UsersService";
import BaseController from "../utils/BaseController";

export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
      .get('', this.getAll)
  }
  async getAll(req, res, next) {
    try {
      const users = await usersService.getAll(req.query)
      return res.send(users)
    } catch (error) {
      next(error)
    }
  }
}