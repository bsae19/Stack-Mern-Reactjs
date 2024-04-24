
const {CINEMA} = require("../../fixtures/Cinema");
const cinemaModel = require("../../models/cinema");
/**
 * @description get all products
 * @param req
 * @param res
 * @return {*}
 */

exports.getAll = async (req, res) => {
    try {
        const cinema = await cinemaModel.find().exec()
        return !cinema
            ?
            res.status(400).json({statusCode: 400, message: 'ERROR IN RETRIEVE ALL PRODUCTS '})
            :
            res.status(200).json({statusCode: 200, message: cinema})
    } catch (e) {
        console.log(e)
        return res.status(400).json({statusCode: 400, message: e.message})
    }
}
exports.create = async (req, res) => {
    try {
        const { userid,title, notice, state } = req.body
        console.log(userid,title, notice, state)
        const cinema = await cinemaModel.create({
            userid,
            title,
            notice,
            state
        })
        return !cinema
            ?
            res.status(400).json({statusCode: 400, message: 'ERROR IN CREATE NEW USER '})
            :
            res.status(200).json({statusCode: 201, message: cinema})
    } catch (e) {
        console.log(e)
        return res.status(400).json({statusCode: 400, message: e.message})
    }
}


exports.getById = async (req, res) => {
    try {
        const { id } = req.params
        const cinema = await cinemaModel.findById(id).exec()
        return !cinema
            ?
            res.status(400).json({statusCode: 400, message: 'ERROR in getby id '})
            :
            res.status(200).json({statusCode: 201, message: cinema})
    } catch (e) {
        console.log(e)
        return res.status(400).json({statusCode: 400, message: e.message})
    }
}
exports.getByUserId = async (req, res) => {
    try {
        const { userid } = req.body
        const cinema = await cinemaModel.find({userid:userid}).exec()
        return !cinema
            ?
            res.status(400).json({statusCode: 400, message: 'ERROR in getby id '})
            :
            res.status(200).json({statusCode: 201, message: cinema})
    } catch (e) {
        console.log(e)
        return res.status(400).json({statusCode: 400, message: e.message})
    }
}

exports.update = async (req, res) => {
    try {
        const { userid, title, notice, state } = req.body
        const { id } = req.params
        const cinema = await cinemaModel.findByIdAndUpdate(id, {
            userid, title, notice, state
        }, {}).exec()
        return !cinema
            ?
            res.status(400).json({statusCode: 400, message: 'ERROR IN UPDATE USER '})
            :
            res.status(200).json({statusCode: 201, message: cinema})
    } catch (e) {
        console.log(e)
        return res.status(400).json({statusCode: 400, message: e.message})
    }
}
exports.updatestatut = async (req, res) => {
    try {
        const { state } = req.body
        const { id } = req.params
        const cinema = await cinemaModel.findByIdAndUpdate(id, {
            state
        }, {}).exec()
        return !cinema
            ?
            res.status(400).json({statusCode: 400, message: 'ERROR IN UPDATE USER '})
            :
            res.status(200).json({statusCode: 201, message: cinema})
    } catch (e) {
        console.log(e)
        return res.status(400).json({statusCode: 400, message: e.message})
    }
}
exports.delete = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const cinema = await cinemaModel.findByIdAndDelete(id)
        console.log(cinema)
        return !cinema
            ?
            res.status(400).json({statusCode: 400, message: 'ERROR IN DELETE USER '})
            :
            res.status(200).json({statusCode: 201, message: cinema})
    } catch (e) {
        console.log(e)
        return res.status(400).json({statusCode: 400, message: e.message})
    }
}

