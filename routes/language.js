const
  express = require('express'),
  languageRouter = express.Router(),
  languageController = require('../controllers/languages.js')


languageRouter.route('/')
  .get(languageController.index)
  .post(languageController.create)

languageRouter.get('/new', languageController.new)
languageRouter.get('/:id/edit', languageController.edit)

languageRouter.route('/:id')
  .get(languageController.show)
  .patch(languageController.update)
  .delete(languageController.destroy)

languageRouter.post('/:id/resources', languageController.resourceCreate)
languageRouter.get('/:id/resources/new', languageController.resourceNew)

languageRouter.post('/:id/posts', languageController.postCreate)
languageRouter.get('/:id/posts/new', languageController.postNew)

languageRouter.get('/:id/posts/:postId/edit', languageController.postEdit)
languageRouter.get('/:id/posts/:postId', languageController.postShow)
languageRouter.patch('/:id/posts/:postId', languageController.postUpdate)
// languageRouter.get('/:id/resources/:resourceId/edit', languageController.resourceEdit)

module.exports = languageRouter
