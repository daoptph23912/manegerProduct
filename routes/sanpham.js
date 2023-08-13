var express = require('express')
var router = express.Router()
var spCtrl=require('../controllers/sanpham.controller')
router.get('/',spCtrl.List)

router.get('/addSP',spCtrl.addSp)
router.post('/addSP',spCtrl.addSp)

router.get('/edit/:idsp',spCtrl.editSp)
router.post('/edit/:idsp',spCtrl.editSp)

router.get('/delete/:idsp',spCtrl.deleteSp)
router.post('/delete/:idsp',spCtrl.deleteSp)

router.get('/detail/:idsp',spCtrl.detailSp);
router.post('/detail/:idsp',spCtrl.detailSp);
module.exports=router
