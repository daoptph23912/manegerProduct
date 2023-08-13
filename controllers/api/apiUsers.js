const apimd = require('../../models/user.model')

exports.listUser = async (req, res, next) => {
  let dataReturn = {
    status: 1,
    msg: 'ok'
  }
  let listUsers = []
  try {
    listUsers = await apimd.USERModel.find()
    dataReturn.data = listUsers;
  } catch (error) {
    dataReturn.msg = error.message;
  }
  res.json(dataReturn)
}

exports.addUser = async (req, res, next) => {
  let dataReturn = {
    status: 1,
    msg: 'ok'
  }
  try {
    const { name, date, content,country } = req.body
    const user = new apimd.USERModel({ name, date, content,country })
    await user.save()
    dataReturn.data = user;
  } catch (error) {
    dataReturn.msg = error.message;
  }
  res.json(dataReturn)
}

exports.updateUser = async (req, res, next) => {
  let dataReturn = {
    status: 1,
    msg: 'ok'
  }
  try {
    const { id } = req.params
    const { name, date, content,country } = req.body
    const user = await apimd.USERModel.findByIdAndUpdate(id, { name, date, content,country }, { new: true })
    dataReturn.data = user;
  } catch (error) {
    dataReturn.msg = error.message;
  }
  res.json(dataReturn)
}

exports.deleteUser = async (req, res, next) => {
  let dataReturn = {
    status: 1,
    msg: 'ok'
  }
  try {
    const { id } = req.params
    await apimd.USERModel.findByIdAndDelete(id)
  } catch (error) {
    dataReturn.status = 0;
    dataReturn.msg = error.message;
  }
  res.json(dataReturn)
}
