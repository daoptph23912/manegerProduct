  var db = require("./db");
  const spSchema = new db.mongoose.Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      id_theloai: {
        type: db.mongoose.Schema.Types.ObjectId,
        ref: 'theLoaiModel'
      },
    },
    {
      collection: 'san_pham',
    }
  );
  const theloaiSchema = db.mongoose.Schema(
    {
      name: { type: String, required: true },
    },
    { collection:  "the_loai"}
  );
  let spModel = db.mongoose.model("spModel", spSchema);
  let theLoaiModel = db.mongoose.model("theLoaiModel", theloaiSchema);
  module.exports = {
    spModel,
    theLoaiModel,
  };
