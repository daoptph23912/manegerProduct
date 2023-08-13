const myModel2 = require('../models/user.model')
const fs = require('fs')

//   exports.listUser = async (req,res, next)=>{
//     let dieu_kien = null;
//     let searchString = ''
//     if(typeof( req.query.name) != 'undefined' )
//     {
//         if(req.query.name!== '' ){
//             searchString = req.query.name
//             let name = req.query.name; 
//             dieu_kien = { name: {$regex:name,$options:'i'} };
//         }
//     }
//     var list = await myModel2.USERModel.find(  dieu_kien   ).sort( { name: 1 });// tìm sp
//       console.log(list)
//     res.render('user/list-user', { listUsers: list, searchString }); // truyền DS ra view
// }
// exports.listUser = async (req, res, next) => {
//     try {
//       const users = await myModel2.USERModel.find().sort({ name: 1 });
//       res.render("user/list-user", { users });
//     } catch (error) {
//       console.error(error);
//       next(error);
//     }
//   };
//   exports.listUser = async (req, res, next) => {
//     let searchString = req.query.name || '';
//     let sortField = req.query.sortField || 'price';
//     let sortOrder = req.query.sortOrder || 'asc';

//     let sortObj = {};
//     sortObj[sortField] = sortOrder === 'asc' ? 1 : -1;

//     try {
//         let list = await myModel2.USERModel
//             .find({ name: { $regex: searchString, $options: 'i' } })
//             .sort(sortObj);

//         res.render('user/list-user', { list: list, searchString: searchString });
//     } catch (error) {
//         console.log(error);
//         res.render('error', { message: 'Lỗi khi hiển thị danh sách người dùng!' });
//     }
// };
exports.listUser = async (req, res, next) => {
    let searchString = '';
    if (typeof req.query.name !== 'undefined' && req.query.name !== '') {
      searchString = req.query.name;
    }
    try {
      const userList = await myModel2.USERModel.find({ name: { $regex: searchString, $options: 'i' } }).sort({ name: 1 });
      res.render('user/list-user', { userList,searchString });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  

exports.addUser = async (req, res, next)=>{
    let msg = ''; // ghi câu thông báo
    if(req.method =='POST'){
        let objUSer = new myModel2.USERModel();
        objUSer.name = req.body.name;
        objUSer.content = req.body.content;
        objUSer.country=req.body.country;
        objUSer.date=req.body.date
        try{
            let new_user = await objUSer.save();
            
            console.log(new_user);

            console.log("Đã ghi thành công");
            msg = 'Đã thêm thành công';
        }catch(err){
            console.log(err);
          
        }
        res.redirect('/users')
 
    }

    res.render('user/add-user', {msg:msg});
}
exports.editUSer = async (req,res,next)=>{
    let msg = ''; // chứa câu thông báo
    // load dữ liệu cũ để hiển thị
    let objUSer = await myModel2.USERModel.findById(  req.params.iduser  );
    console.log( objUSer);

    // lấy danh sách thể loại đưa lên form
    // let listTheLoai = await myModel.theLoaiModel.find();
    if(req.method =='POST'){
        // xử lý ghi CSDL ở đây
        // kiểm tra hợp lệ dữ liệu ở chỗ này.


        // tạo đối tượng model 
        let objUSer = new myModel2.USERModel();
        objUSer.name = req.body.name;
        objUSer.content = req.body.content;
        objUSer.country=req.body.country;
        objUSer.date=req.body.date
        objUSer._id = req.params.iduser;
        try{
             
            // update dữ liệu
            // await myModel.spModel.updateOne( {_id:  req.params.iduser},   objUSer );
             await myModel2.USERModel.findByIdAndUpdate({_id:  req.params.iduser},objUSer);

            console.log("Đã ghi thành công");
            msg = 'Đã ghi thành công';
        }catch(err){
            console.log(err);
            msg ='Lỗi '+ err.message;

        }
        res.redirect('/users')
 
    }

    res.render('user/edit-user', 
            // {msg:msg, objUSer: objUSer, listTheLoai:listTheLoai})
            {msg:msg, objUSer: objUSer})

}
exports.deleteUser = async (req,res,next)=>{
    let msg = ''; // chứa câu thông báo
    // load dữ liệu cũ để hiển thị
    let objUSer = await myModel2.USERModel.findById(  req.params.iduser  );
    console.log( objUSer);

    // lấy danh sách thể loại đưa lên form
    // let listTheLoai = await myModel.theLoaiModel.find();
    if(req.method =='POST'){
        // xử lý ghi CSDL ở đây
        // kiểm tra hợp lệ dữ liệu ở chỗ này.


        // tạo đối tượng model 
        let objUSer = new myModel2.USERModel();
        objUSer.name = req.body.name;
        objUSer.content = req.body.content;
        objUSer.country=req.body.country;
        objUSer.date=req.body.date
        objUSer._id = req.params.iduser;
        try{
             
            // update dữ liệu
            // await myModel.spModel.updateOne( {_id:  req.params.iduser},   objUSer );
             await myModel2.USERModel.deleteOne({_id:  req.params.iduser},objUSer);

            console.log("Đã delete thành công");
            msg = 'Đã delete thành công';
        }catch(err){
            console.log(err);
            msg ='Lỗi '+ err.message;

        }
        res.redirect('/users')
 
    }

    res.render('user/delete-user', 
            // {msg:msg, objUSer: objUSer, listTheLoai:listTheLoai})
            {msg:msg, objUSer: objUSer})

}
