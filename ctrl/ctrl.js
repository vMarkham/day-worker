module.exports = name => {
    const Model = require(`../model/${ name }.js`)


    class Controller {
        static all(req, res, next) {
            Model.all().then(response => {
                res.json({
                    [name]: response
                })
            })
            .catch(err => next(err))
        }

        static one(req, res, next) {
            Model.one(req.params.id).then(response => {
                res.json({
                    [name]: response
                })
            })
            .catch(err => next(err))    
        }

        static create(req, res, next) {
            Model.create(req.body.create).then(response => {
                res.status(201).json({
                    [name]: response
                })
            })
            .catch(err => next(err))
        }

        static update(req, res, next) {
            Model.update(req.params.id, req.body).then(response => {
                res.json({
                    [name]: response
                })
            })
            .catch(err => next(err))
        }

        static destroy(req, res, next) {
            Model.destroy(req.params.id).then(response => {
                res.json({
                    [name]: response
                })
            })
            .catch(err => next(err))
        }
    }

    return Controller
}
