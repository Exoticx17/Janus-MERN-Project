const express = require('express')
const learningController = require('../controllers/learningController')


const router = express.Router()

router.get('/', learningController.learningGet)
router.get('/one', learningController.learningGetOne)
router.get('/accepted', learningController.learningAccept)
router.get('/double', learningController.learningGetDouble)
router.get('/search', learningController.learningSearch)
router.get('/accept', learningController.learningAccept)
router.get('/category', learningController.learningCategory)
router.post('/', learningController.learningPost)
router.patch('/:id', learningController.learningPatch)
router.patch('/message/:id', learningController.learningMessage)
router.patch('/change/:id', learningController.learningChange)
router.delete('/:id', learningController.learningDelete)




module.exports = router;
