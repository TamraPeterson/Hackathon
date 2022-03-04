import BaseController from "../utils/BaseController";


export class LikesController extends BaseController {
  constructor() {
    super('api/likes')
    this.router
      .get('')
  }

}