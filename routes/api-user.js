var express = require('express')

var router = express.Router()

var API = require('../controllers/api/apiUsers')


router.get('/users',API.listUser)

router.get('/users',API.addUser)
router.post('/users',API.addUser)

router.get('/users/:id',API.updateUser)
router.post('/users/:id',API.updateUser)

router.get('/users/:id',API.deleteUser)
router.post('/users/:id',API.deleteUser)

module.exports = router;
