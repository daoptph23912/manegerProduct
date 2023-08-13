var db = require('./db')
const userSchema=new db.mongoose.Schema(
    {
        name:{type:String,require:true},
        content:{type:String,require:true},
        country:{type:String,require:true},
        date:{type: Date,default:Date.now}
    },
    {collection:'users'}
)
let USERModel=db.mongoose.model('USERModel',userSchema);
module.exports={
    USERModel

}