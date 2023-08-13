const myDb = require('./db');
const userSchema = new myDb.mongoose.Schema(
    {
        username: {type: String, required: true},
        passwd: { type: String, required: true},
        email: { type: String , required: true}
    },
    {
        collection: 'tb_user'
    }
);

let UserModel = myDb.mongoose.model('UserModel', userSchema);

module.exports = { UserModel }