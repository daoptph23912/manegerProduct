var express=require('express');

var router = express.Router();

var API = require('../controllers/api/apiSp');

router.get('/sp',API.listSp);
router.post('/sp',API.listSp);

module.exports=router;