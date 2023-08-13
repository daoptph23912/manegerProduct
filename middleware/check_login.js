exports.yeu_cau_dang_nhap = (req, res, next)=>{
    if(req.session){
        // có tồn tại thông tin user login : đã đăng nhập
        next(); 
    }else{
        return res.redirect('/book');
    }
}
exports.khong_yc_dang_nhap = (req, res, next)=>{
    if(!req.session){
        next(); 
    }else {
        return  res.redirect('/login');
    }
}