var express = require('express');
var router = express.Router();
var UserCtrl=require('../controllers/user.controller')

router.get('/',UserCtrl.listUser);

router.get('/addUSer',UserCtrl.addUser)
router.post('/addUSer',UserCtrl.addUser)

router.get('/deleteUSer/:iduser',UserCtrl.deleteUser)
router.post('/deleteUSer/:iduser',UserCtrl.deleteUser)

router.get('/editUSer/:iduser',UserCtrl.editUSer)
router.post('/editUSer/:iduser',UserCtrl.editUSer)
module.exports = router;
