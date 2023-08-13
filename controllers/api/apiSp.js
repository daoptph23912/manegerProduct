const apimd = require('../../models/sanpham.model')
exports.listSp=async(req,res,next)=>{
    let dataReturn = {
        status :1,
        msg:'ok'
    }
    let listSp = []
    try{
        listSp = await apimd.spModel.find()
        dataReturn.data = listSp;
    }catch(error){
        dataReturn.msg = error.message;
    }
    res.json(dataReturn)
}



