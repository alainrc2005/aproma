'use strict'

class MainController {
    async index({ request, view, session }) {
        return view.render('app')
    }

}

module.exports = MainController
