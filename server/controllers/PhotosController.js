import BaseController from "../utils/BaseController";


export class PhotosController extends BaseController {
    constructor() {
        super('api/photos')
        this.router
            .get('', this.getAll)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
    }

    async getAll(req, res, next) {
        try {
            const photos = await photosService.getAll()
            return res.send(req.query)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.creatorId
            res.send(req.body)
        } catch (error) {
            next(error)
        }
    }
}