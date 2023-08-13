const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ql_banhang')

.catch((err) => {
  console.log("Loi ket noi co so du lieu");
  console.log(err);
});
module.exports = { mongoose };
