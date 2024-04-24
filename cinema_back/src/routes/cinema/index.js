const expressRouter = require('express').Router(),
    cinemaController = require('../../controllers/cinema'),
    JWTGuard = require('../../config/passport')

module.exports = (app) => {
    expressRouter.get('/cinemas/all', JWTGuard.checkIsAuth, cinemaController.getAll)
    expressRouter.post('/cinema/:id', JWTGuard.checkIsAuth, cinemaController.getById)
    expressRouter.post('/cinemas', JWTGuard.checkIsAuth, cinemaController.getByUserId)
    expressRouter.post('/cinema', JWTGuard.checkIsAuth, cinemaController.create)
    expressRouter.patch('/cinema/:id', JWTGuard.checkIsAuth, cinemaController.update)
    expressRouter.patch('/cinema/statut/:id', JWTGuard.checkIsAuth, cinemaController.updatestatut)
    expressRouter.delete('/cinema/:id', JWTGuard.checkIsAuth, cinemaController.delete)
    app.use('/api/v1', expressRouter)
}