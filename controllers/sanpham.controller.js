const fs = require('fs')
const myModel = require('../models/sanpham.model')


exports.List = async (req, res, next) => {
    let dieu_kien = null;
    if (typeof (req.query.price) != 'undefined') {
        let price = req.query.price;
        dieu_kien = { price: price }

    }
    var List = await myModel.spModel.find(dieu_kien).sort({ name: 1 }).populate('id_theloai')
    console.log(List)
    res.render('sanpham/list-sp', { listSp: List })

}
exports.addSp = async (req, res, next) => {
    let msg = '';
    let listTheLoai = await myModel.theLoaiModel.find()
    if (req.method == 'POST') {
        let objSP = new myModel.spModel()
        objSP.name = req.body.name;
        objSP.price = req.body.price;
        objSP.description = req.body.description;
        objSP.id_theloai = req.body.theloai;
        try {
            let new_sp = await objSP.save();
            console.log(new_sp)

            console.log("Da ghi thanh cong")
            msg = 'da them thanh cong'
        } catch (err) {
            console.log(err);
        }
        res.redirect('/sp')
    }
    res.render('sanpham/add-sp', { msg: msg, listTheLoai });
}
exports.editSp = async (req, res, next) => {
    let msg = '';


    let objSP = await myModel.spModel.findById(req.params.idsp)
    console.log(objSP)

    let listTheLoai = await myModel.theLoaiModel.find();

    if (req.method == 'POST') {
        let objSP = new myModel.spModel()
        objSP.name = req.body.name
        objSP.price = req.body.price
        objSP.description = req.body.description;
        objSP.id_theloai = req.body.theloai;
        objSP._id = req.params.idsp;
        try {
            await myModel.spModel.findByIdAndUpdate({ _id: req.params.idsp }, objSP)
            console.log('Da ghi thanh cong')
            msg = 'Da ghi thanh cong'
        } catch (err) {
            console.log(err)
            msg = 'Loi' + err.message
        }
        res.redirect('/sp')
    }
    res.render('sanpham/edit-sp', { msg: msg, listTheLoai, objSP: objSP })
}
exports.deleteSp = async (req, res, next) => {
    let msg = ''
    let objSP = await myModel.spModel.findById(req.params.idsp);
    console.log(objSP)
    let listTheLoai = await myModel.theLoaiModel.find();
    if (req.method == 'POST') {
        let objSP = new myModel.spModel()
        objSP.name = req.body.name;
        objSP.price = req.body.price;
        objSP.description = req.body.description;
        objSP.id_theloai = req.body.theloai;
        objSP._id = req.params.idsp;
        try {
            await myModel.spModel.deleteOne({ _id: req.params.idsp }, objSP);
            console.log('Da delete thanh cong');
            msg = 'da delete thanh cong'
        } catch (err) {
            console.log(err);
            msg = 'Loi' + err.message;
        }
        res.redirect('/sp');
    }
    res.render('sanpham/delete-sp', { msg: msg, listTheLoai, objSP });

}

exports.detailSp = async (req, res, next) => {
    let msg = '';
    let objSP = await myModel.spModel.findById(req.params.idsp);
    console.log(objSP)
    if (req.method == 'POST') {
        let objSP = myModel.spModel();
        objSP.name = req.body.name;
        objSP.price = req.body.price;
        objSP.description = req.body.description;
        objSP.id_theloai = req.body.theloai;
        objSP._if = req.params.idsp;
    }
    res.render('sanpham/detail-sp', { msg: msg, objSP })
}
