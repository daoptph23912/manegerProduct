var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/login.controller');
var check_login = require('../middleware/check_login');

// dùng middlware cho toàn bộ các router ở trong file thì viết ở trên đầu file
router.use( (req,res,next)=>{
      console.log("=======> Đã gọi middlware ===> " , Date.now() );
      next();// thực hiện các việc tiếp theo
})


/* GET users listing. */
router.get('/',check_login.yeu_cau_dang_nhap, function(req, res, next) {
  // danh sách user
  console.log('Hiển thị danh sách user');

  // hiển thị user đã login 
  console.log(req.session);
  res.send(req.session);
});

router.get('/reg', check_login.khong_yc_dang_nhap, userCtrl.Reg);
router.post('/reg', check_login.khong_yc_dang_nhap, userCtrl.Reg);

router.get('/login', check_login.khong_yc_dang_nhap, userCtrl.Login);
router.post('/login', check_login.khong_yc_dang_nhap , userCtrl.Login);

router.get('/logout', userCtrl.Logout);

module.exports = router;
