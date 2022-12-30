const express = require('express')
const graphController = require('../controllers/graphController')


const router = express.Router()

router.get('/', graphController.graphGet)
router.get('/one', graphController.graphGetOne)
router.get('/search', graphController.graphGetSearch)
router.get('/charts', graphController.grpahGetSubjects)
router.post('/', graphController.graphPost)
router.patch('/:id', graphController.graphEdit)
router.delete('/:id', graphController.graphDelete)


module.exports = router;
