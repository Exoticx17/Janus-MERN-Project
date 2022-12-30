const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/', userController.users_get);
router.get('/one/:id', userController.userGetOne);
router.post('/signup', userController.signup_post);
router.post('/login', userController.login_post);
router.get('/getroll', userController.userGetEnroll);
router.post('/logout', userController.logout_post);
router.get('/status', userController.auth_status);
router.patch('/admin/:id',userController.admin_user);
router.patch('/submit/:id',userController.submit_user);
router.patch('/enroll',userController.userEnroll);
router.patch('/deroll',userController.userDeroll);
router.delete('/:id', userController.users_delete);

module.exports = router;